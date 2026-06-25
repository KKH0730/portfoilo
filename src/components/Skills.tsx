import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, LayoutChangeEvent, Animated, useWindowDimensions } from 'react-native';
import { skills, aiTools, devEnvironment, SkillCategory as SkillCategoryType } from '../data/portfolio';
import C from '../theme/colors';

function EnvChip({ tool }: { tool: (typeof devEnvironment)[0] }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const scale = useRef(new Animated.Value(1)).current;

  const onHoverIn = () =>
    Animated.spring(scale, { toValue: 1.08, useNativeDriver: true, speed: 30, bounciness: 6 }).start();
  const onHoverOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 30, bounciness: 6 }).start();

  // 모바일: 3열 (섹션패딩 32 + 칩gap 2*8 = 48)
  const chipWidth = isMobile ? Math.floor((width - 48) / 3) : undefined;

  return (
    <Animated.View
      style={[
        styles.envChip,
        { borderColor: tool.color + '70', transform: [{ scale }] },
        isMobile && { flex: 0, flexBasis: chipWidth, width: chipWidth, minWidth: 0 },
      ]}
      {...({ onMouseEnter: onHoverIn, onMouseLeave: onHoverOut } as any)}
    >
      <View style={[styles.envChipIconWrap, { backgroundColor: tool.color + '12' }, isMobile && styles.envChipIconWrapMobile]}>
        <Image source={tool.logo} style={[styles.envChipLogo, isMobile && styles.envChipLogoMobile]} resizeMode="contain" />
      </View>
      <Text style={[styles.envChipName, isMobile && styles.envChipNameMobile]}>{tool.name}</Text>
    </Animated.View>
  );
}

function SkillCategoryCard({ category, icon, keyItems, items }: SkillCategoryType) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  return (
    <View style={[styles.categoryCard, isMobile && { width: '100%' as any }]}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryIcon}>{icon}</Text>
        <Text style={styles.categoryName}>{category}</Text>
      </View>

      {/* Progress bars for key skills */}
      <View style={styles.barList}>
        {keyItems.map((item, i) => (
          <View key={i} style={styles.barItem}>
            <View style={styles.barLabelRow}>
              <Text style={styles.barLabel}>{item.name}</Text>
              {item.level !== undefined && (
                <Text style={styles.barPct}>{item.level}%</Text>
              )}
            </View>
            <View style={styles.barTrack}>
              <View
                style={[
                  styles.barFill,
                  { width: `${item.level ?? 80}%` as any },
                ]}
              />
            </View>
          </View>
        ))}
      </View>

      {/* Remaining items as tags */}
      {items.length > 0 && (
        <View style={styles.tagList}>
          {items.map((item, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

interface SkillsProps {
  onLayout: (e: LayoutChangeEvent) => void;
}

export default function Skills({ onLayout }: SkillsProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]} onLayout={onLayout} nativeID="skills">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>Skills</Text>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>기술 스택</Text>
        </View>

        <View style={[styles.skillsGrid, isMobile && styles.skillsGridMobile]}>
          {skills.map((cat, i) => (
            <SkillCategoryCard key={i} {...cat} />
          ))}
        </View>

        {/* 개발 협업 환경 */}
        <View style={styles.envSection}>
          <Text style={styles.envTitle}>개발 협업 환경</Text>
          <View style={[styles.envChips, isMobile && styles.envChipsMobile]}>
            {(['개발 도구', '버전 관리 & CI/CD', '디자인', '협업 & 커뮤니케이션'] as const).flatMap(
              (groupName, gi) => {
                const tools = devEnvironment.filter((t) => t.group === groupName);
                if (!tools.length) return [];
                const chips = tools.map((tool, i) => (
                  <EnvChip key={`${gi}-${i}`} tool={tool} />
                ));
                return chips;
              }
            )}
          </View>
        </View>

        <View style={[styles.aiSection, isMobile && styles.aiSectionMobile]}>
          <View style={styles.aiHeader}>
            <View style={styles.aiTitleRow}>
              <Text style={styles.aiTitleIcon}>✦</Text>
              <Text style={styles.aiTitle}>AI 활용 개발</Text>
            </View>
            <Text style={styles.aiSub}>
              AI 도구를 개발 워크플로우에 통합하여 생산성을 극대화합니다
            </Text>
          </View>

          <View style={styles.aiToolsRow}>
            {aiTools.map((tool, i) => (
              <View key={i} style={styles.aiToolCard}>
                <View style={styles.aiToolTop}>
                  <Text style={[styles.aiToolName, { color: tool.color }]}>{tool.tool}</Text>
                  <View style={[styles.aiRoleBadge, { backgroundColor: tool.color + '15' }]}>
                    <Text style={[styles.aiRoleText, { color: tool.color }]}>{tool.role}</Text>
                  </View>
                </View>
                <View style={styles.aiUsageList}>
                  {tool.usages.map((usage, j) => (
                    <View key={j} style={styles.aiUsageItem}>
                      <Text style={[styles.aiUsageDot, { color: tool.color }]}>›</Text>
                      <Text style={styles.aiUsageText}>{usage}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: C.bg,
    paddingVertical: 64,
    paddingHorizontal: 40,
  },
  sectionMobile: {
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  sectionTitleMobile: {
    fontSize: 26,
  },
  skillsGridMobile: {
    flexDirection: 'column',
  },
  aiSectionMobile: {
    padding: 20,
  },
  inner: {
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 52,
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
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginBottom: 60,
  },
  categoryCard: {
    width: '32%' as any,
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 22,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: C.shadow,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: C.borderLight,
  },
  categoryIcon: {
    fontSize: 20,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '700',
    color: C.text,
  },
  // Progress bars
  barList: {
    gap: 10,
    marginBottom: 14,
  },
  barItem: {},
  barLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: C.text,
  },
  barPct: {
    fontSize: 11,
    fontWeight: '700',
    color: C.accent,
  },
  barTrack: {
    height: 6,
    borderRadius: 4,
    backgroundColor: C.accentDim,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: C.accent,
  },

  // Tags (remaining items)
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    borderTopWidth: 1,
    borderTopColor: C.borderLight,
    paddingTop: 12,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: C.bgAlt,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '500',
    color: C.textSub,
  },
  // Dev Environment
  envSection: {
    marginBottom: 40,
  },
  envTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.3,
    marginBottom: 20,
  },
  envChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  envChipsMobile: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  envChip: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    backgroundColor: C.white,
  },
  envChipIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  envChipIconWrapMobile: {
    width: 34,
    height: 34,
    borderRadius: 9,
  },
  envChipLogo: {
    width: 30,
    height: 30,
  },
  envChipLogoMobile: {
    width: 22,
    height: 22,
  },
  envChipName: {
    fontSize: 11,
    fontWeight: '700',
    color: C.text,
    textAlign: 'center',
  },
  envChipNameMobile: {
    fontSize: 9,
  },

  aiSection: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 36,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: C.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  aiHeader: {
    marginBottom: 32,
  },
  aiTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  aiTitleIcon: {
    fontSize: 18,
    color: C.accent,
    fontWeight: '700',
  },
  aiTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.4,
  },
  aiSub: {
    fontSize: 15,
    color: C.textSub,
    lineHeight: 24,
  },
  aiToolsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  aiToolCard: {
    flex: 1,
    minWidth: 240,
    backgroundColor: C.bg,
    borderRadius: 14,
    padding: 22,
    borderWidth: 1,
    borderColor: C.border,
  },
  aiToolTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  aiToolName: {
    fontSize: 17,
    fontWeight: '800',
  },
  aiRoleBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  aiRoleText: {
    fontSize: 11,
    fontWeight: '700',
  },
  aiUsageList: {
    gap: 8,
  },
  aiUsageItem: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  aiUsageDot: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  aiUsageText: {
    fontSize: 13,
    color: C.textSub,
    lineHeight: 22,
    flex: 1,
  },
});
