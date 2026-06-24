import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { skills, aiTools } from '../data/portfolio';
import C from '../theme/colors';

function SkillCategory({ category, icon, items }) {
  return (
    <View style={styles.categoryCard}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryIcon}>{icon}</Text>
        <Text style={styles.categoryName}>{category}</Text>
      </View>
      <View style={styles.tagList}>
        {items.map((item, i) => (
          <View key={i} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Skills({ onLayout }) {
  return (
    <View style={styles.section} onLayout={onLayout} nativeID="skills">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>Skills</Text>
          <Text style={styles.sectionTitle}>기술 스택</Text>
        </View>

        <View style={styles.skillsGrid}>
          {skills.map((cat, i) => (
            <SkillCategory
              key={i}
              category={cat.category}
              icon={cat.icon}
              items={cat.items}
            />
          ))}
        </View>

        <View style={styles.aiSection}>
          <View style={styles.aiHeader}>
            <View style={styles.aiTitleRow}>
              <Text style={styles.aiTitleIcon}>✦</Text>
              <Text style={styles.aiTitle}>AI-Augmented Development</Text>
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
    paddingVertical: 96,
    paddingHorizontal: 40,
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
    flex: 1,
    minWidth: 240,
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
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  tag: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 7,
    backgroundColor: C.accentDim,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: C.accent,
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
