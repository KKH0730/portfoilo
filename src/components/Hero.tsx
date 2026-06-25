import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, LayoutChangeEvent } from 'react-native';
import { personal, stats } from '../data/portfolio';
import C from '../theme/colors';

const BIO_LINES = [
  '5년 이상의 Android 개발 경험으로 결제·인증·CI/CD 자동화는 물론, OpenCV 기반 카메라 ROI 추출, 블루투스 기기 연동 등 하드웨어와 맞닿는 기능까지 직접 구현해왔습니다.',
  'PC방 7,000+ 매장 도입 앱부터 영화 추천 플랫폼, 팬덤 서비스, 반려동물 헬스케어까지 도메인을 가리지 않고 서비스의 핵심을 맡아왔습니다.',
  '기능 구현보다 오래 운영되는 서비스를 만드는 것을 중요하게 생각합니다.',
];

interface HeroProps {
  onLayout: (e: LayoutChangeEvent) => void;
}

export default function Hero({ onLayout }: HeroProps) {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.section} onLayout={onLayout} nativeID="hero">
      <View style={styles.inner}>
        <View style={styles.twoCol}>

          {/* ── Left: text ── */}
          <View style={styles.leftCol}>
            {/* Role */}
            <View style={styles.roleRow}>
              <Image source={require('../../assets/favicon.png')} style={styles.roleFavicon} resizeMode="contain" />
              <Text style={styles.roleText}>Android Developer</Text>
            </View>

            {/* Name */}
            <View style={styles.nameBlock}>
              <View style={styles.nameRow}>
                <Text style={styles.nameEn}>{personal.nameEn}</Text>
                <Text style={styles.nameKo}>{personal.name}</Text>
              </View>
            </View>

            {/* Tagline */}
            <Text style={styles.tagline}>
              주도적으로 성과를 만드는{'\n'}
              <Text style={styles.taglineAccent}>개발자</Text>입니다
            </Text>

            {/* Bio */}
            <View style={styles.bioBlock}>
              {BIO_LINES.map((line, i) => (
                <Text key={i} style={styles.bioText}>{line}</Text>
              ))}
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <View style={styles.statDivider} />}
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{stat.value}</Text>
                    <Text style={styles.statLabel}>{stat.label}</Text>
                  </View>
                </React.Fragment>
              ))}
            </View>

            {/* CTAs */}
            <View style={styles.ctaRow}>
              <TouchableOpacity
                style={styles.ctaPrimary}
                onPress={() => openLink(personal.github)}
                activeOpacity={0.85}
              >
                <Text style={styles.ctaPrimaryText}>GitHub ↗</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ctaSecondary}
                onPress={() => openLink(personal.blog)}
                activeOpacity={0.85}
              >
                <Text style={styles.ctaSecondaryText}>기술 블로그</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ctaSecondary}
                onPress={() => openLink(`mailto:${personal.email}`)}
                activeOpacity={0.85}
              >
                <Text style={styles.ctaSecondaryText}>이메일 문의</Text>
              </TouchableOpacity>
            </View>

            {/* Contact */}
            <View style={styles.contactRow}>
              <View style={styles.contactChip}>
                <Text style={styles.contactIcon}>✉</Text>
                <Text style={styles.contactItem}>{personal.email}</Text>
              </View>
              <View style={styles.contactChip}>
                <Text style={styles.contactIcon}>📞</Text>
                <Text style={styles.contactItem}>{personal.phone}</Text>
              </View>
            </View>
          </View>

          {/* ── Right: photo ── */}
          <View style={styles.rightCol}>
            <View style={styles.photoWrap}>
              <Image
                source={require('../../assets/profile.jpg')}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: C.bg,
    paddingTop: 96,
    paddingBottom: 96,
    paddingHorizontal: 40,
  },
  inner: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },

  twoCol: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 72,
    flexWrap: 'wrap',
  },

  // Left
  leftCol: {
    flex: 1,
    minWidth: 320,
  },

  roleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 28,
  },
  roleFavicon: {
    width: 20,
    height: 20,
  },
  roleText: {
    fontSize: 14,
    fontWeight: '600',
    color: C.accent,
    letterSpacing: 0.3,
  },
  roleSep: {
    width: 1,
    height: 12,
    backgroundColor: C.border,
  },
  roleExp: {
    fontSize: 13,
    color: C.textMuted,
    fontWeight: '500',
  },

  nameBlock: {
    marginBottom: 18,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 14,
    flexWrap: 'wrap',
  },
  nameEn: {
    fontSize: 60,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -2,
    lineHeight: 66,
  },
  nameKo: {
    fontSize: 22,
    fontWeight: '500',
    color: C.textMuted,
    letterSpacing: -0.3,
  },

  tagline: {
    fontSize: 26,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.6,
    lineHeight: 38,
    marginBottom: 20,
  },
  taglineAccent: {
    color: C.accent,
  },

  bioBlock: {
    gap: 10,
    marginBottom: 28,
    paddingLeft: 14,
    borderLeftWidth: 3,
    borderLeftColor: C.accent + '40',
  },
  bioText: {
    fontSize: 14,
    color: C.textSub,
    lineHeight: 24,
    fontWeight: '400',
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: C.border,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: C.border,
  },
  statValue: {
    fontSize: 26,
    fontWeight: '800',
    color: C.accent,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 11,
    color: C.textMuted,
    fontWeight: '500',
  },

  ctaRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  ctaPrimary: {
    backgroundColor: C.text,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },
  ctaPrimaryText: {
    color: C.white,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  ctaSecondary: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: C.border,
    backgroundColor: C.white,
  },
  ctaSecondaryText: {
    color: C.text,
    fontSize: 14,
    fontWeight: '600',
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  contactChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
  },
  contactIcon: {
    fontSize: 13,
  },
  contactItem: {
    fontSize: 13,
    color: C.text,
    fontWeight: '500',
  },

  // Right: photo
  rightCol: {
    alignItems: 'center',
    flexShrink: 0,
    paddingTop: 48,
  },
  photoWrap: {
    width: 272,
    height: 332,
  },
  photo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 260,
    height: 320,
    borderRadius: 24,
  },
  photoBorder: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 260,
    height: 320,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: C.accent + '30',
  },
});
