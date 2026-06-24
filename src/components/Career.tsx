import React, { useMemo, useRef, useState } from 'react';
import { View, Text, Image, Animated, StyleSheet, LayoutChangeEvent, Dimensions } from 'react-native';
import { career } from '../data/portfolio';
import C from '../theme/colors';

const companyLogos: Record<number, any> = {
  1: require('../../assets/logos/mediaweb.jpg'),
  2: require('../../assets/logos/keytalk.jpg'),
  3: require('../../assets/logos/alphado.jpg'),
};

const steps = [...career].reverse(); // 알파도 → 키토크 → 미디어웹

const WH = Dimensions.get('window').height;
const NAV_H = 64;
const CHAR_H = 90;
const DOT_SIZE = 60;
const DOT_COL_W = 80;
const JOURNEY_PAD_TOP = 35;
const ROW_PAD_TOP = 20;

interface CareerProps {
  onLayout: (e: LayoutChangeEvent) => void;
  scrollY: Animated.Value;
  sectionY: number;
}

function PersonIcon({ color }: { color: string }) {
  return (
    <View style={person.wrap}>
      <View style={[person.head, { backgroundColor: color }]} />
      <View style={[person.body, { backgroundColor: color }]} />
      <View style={person.legs}>
        <View style={[person.leg, { backgroundColor: color }]} />
        <View style={[person.leg, { backgroundColor: color }]} />
      </View>
      <View style={[person.shadow, { backgroundColor: color + '25' }]} />
    </View>
  );
}

const person = StyleSheet.create({
  wrap: { alignItems: 'center' },
  head: { width: 26, height: 26, borderRadius: 13, marginBottom: 2 },
  body: { width: 32, height: 24, borderRadius: 7, marginBottom: 2 },
  legs: { flexDirection: 'row', gap: 5, marginBottom: 3 },
  leg: { width: 11, height: 20, borderRadius: 5 },
  shadow: { width: 36, height: 7, borderRadius: 10 },
});

type StepCompany = (typeof steps)[0];

function StepCard({ company, isCurrent }: { company: StepCompany; isCurrent: boolean }) {
  const color = company.color;
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <View style={styles.cardPeriodRow}>
        <Text style={[styles.cardPeriod, { color }]}>{company.period}</Text>
        {isCurrent && (
          <View style={[styles.nowBadge, { backgroundColor: color }]}>
            <View style={styles.nowPulse} />
            <Text style={styles.nowText}>재직 중</Text>
          </View>
        )}
      </View>

      <Text style={styles.cardCompany}>{company.company}</Text>
      <Text style={styles.cardRole}>{company.role}</Text>

      <View style={[styles.cardDivider, { backgroundColor: color + '25' }]} />

      <View style={styles.highlightRow}>
        {company.highlights.slice(0, 3).map((h, i) => (
          <View key={i} style={[styles.highlightItem, i < 2 && { borderRightWidth: 1, borderRightColor: C.borderLight }]}>
            <Text style={[styles.highlightValue, { color }]}>{h.value}</Text>
            <Text style={styles.highlightLabel}>{h.label.replace('\n', ' ')}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Career({ onLayout, scrollY, sectionY }: CareerProps) {
  const pendingYs = useRef<Record<number, number>>({});
  const [stepYs, setStepYs] = useState<number[]>([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleBlockLayout = (idx: number, e: LayoutChangeEvent) => {
    pendingYs.current[idx] = JOURNEY_PAD_TOP + e.nativeEvent.layout.y;
    if (Object.keys(pendingYs.current).length >= steps.length) {
      const sorted = [0, 1, 2].map((i) => pendingYs.current[i] ?? i * 300);
      setStepYs(sorted);
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: false }).start();
    }
  };

  const characterTop = useMemo(() => {
    if (stepYs.length < 3 || sectionY === 0) {
      return scrollY.interpolate({ inputRange: [0, 1], outputRange: [-300, -300] });
    }
    const dotTopOffset = ROW_PAD_TOP;
    const targets = stepYs.map((y) => y + dotTopOffset - CHAR_H);
    return scrollY.interpolate({
      inputRange: [
        sectionY - WH + NAV_H,
        sectionY - WH * 0.67 + NAV_H,
        sectionY - WH * 0.33 + NAV_H,
        Math.max(0, sectionY - NAV_H),
      ],
      outputRange: [targets[0], targets[1], targets[2], targets[2]],
      extrapolate: 'clamp',
    });
  }, [stepYs, sectionY, scrollY]);

  return (
    <View style={styles.section} onLayout={onLayout} nativeID="career">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>Career</Text>
          <Text style={styles.sectionTitle}>경력 사항</Text>
        </View>

        <View style={styles.journey}>
          {/* Center vertical line */}
          <View style={styles.centerLineWrap} pointerEvents="none">
            <View style={styles.centerLine} />
          </View>

          {/* Animated character — centered on the line */}
          <Animated.View style={[styles.characterWrap, { top: characterTop, opacity: fadeAnim }]}>
            <PersonIcon color="#F97316" />
          </Animated.View>

          {/* Zigzag steps */}
          {steps.map((company, idx) => {
            const isLeft = idx % 2 === 0;
            const isCurrent = company.period.includes('재직중');
            return (
              <View
                key={company.id}
                style={[styles.stepRow, idx === steps.length - 1 && { marginBottom: 0 }]}
                onLayout={(e) => handleBlockLayout(idx, e)}
              >
                {/* Left side */}
                <View style={styles.side}>
                  {isLeft && <StepCard company={company} isCurrent={isCurrent} />}
                </View>

                {/* Center dot */}
                <View style={styles.dotCol}>
                  <View
                    style={[
                      styles.dot,
                      {
                        backgroundColor: company.color + '15',
                        borderColor: isCurrent ? company.color : company.color + '55',
                        borderWidth: isCurrent ? 2.5 : 1.5,
                      },
                    ]}
                  >
                    <Image
                      source={companyLogos[company.id]}
                      style={styles.dotLogo}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                {/* Right side */}
                <View style={styles.side}>
                  {!isLeft && <StepCard company={company} isCurrent={isCurrent} />}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: C.bg,
    paddingVertical: 96,
    paddingHorizontal: 40,
  },
  inner: {
    maxWidth: 1000,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 14,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: C.accent,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.8,
  },

  journey: {
    paddingTop: JOURNEY_PAD_TOP,
    position: 'relative',
  },

  // Center vertical line
  centerLineWrap: {
    position: 'absolute',
    top: JOURNEY_PAD_TOP,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  centerLine: {
    width: 2,
    flex: 1,
    backgroundColor: C.border,
  },

  // Character
  characterWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },

  // Step row
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 52,
  },
  side: {
    flex: 1,
    paddingHorizontal: 20,
  },

  // Dot
  dotCol: {
    width: DOT_COL_W,
    alignItems: 'center',
    paddingTop: ROW_PAD_TOP,
    flexShrink: 0,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 2,
    backgroundColor: C.white,
  },
  dotLogo: {
    width: 50,
    height: 50,
  },

  // Card
  card: {
    backgroundColor: C.white,
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: C.border,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  cardPeriodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  cardPeriod: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  nowBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  nowPulse: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  nowText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
  cardCompany: {
    fontSize: 20,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  cardRole: {
    fontSize: 13,
    color: C.textMuted,
    fontWeight: '500',
  },
  cardDivider: {
    height: 1,
    marginVertical: 16,
  },
  highlightRow: {
    flexDirection: 'row',
  },
  highlightItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
    gap: 3,
  },
  highlightValue: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  highlightLabel: {
    fontSize: 10,
    color: C.textMuted,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 15,
  },
});
