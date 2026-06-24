import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { featuredProjects, additionalProjects } from '../data/portfolio';
import C from '../theme/colors';

function FeaturedCard({ project }) {
  return (
    <View style={styles.featuredCard}>
      <View style={styles.featuredTop}>
        <View style={[styles.categoryBadge, { backgroundColor: project.categoryColor + '15' }]}>
          <Text style={[styles.categoryBadgeText, { color: project.categoryColor }]}>
            {project.category}
          </Text>
        </View>
        <View style={styles.featuredMeta}>
          <Text style={styles.featuredCompany}>{project.company}</Text>
          <Text style={styles.featuredPeriod}>{project.period}</Text>
        </View>
      </View>

      <Text style={styles.featuredTitle}>{project.title}</Text>
      <Text style={styles.featuredDesc}>{project.description}</Text>

      <View style={styles.highlightList}>
        {project.highlights.map((h, i) => (
          <View key={i} style={styles.highlightItem}>
            <Text style={styles.highlightIcon}>{h.icon}</Text>
            <Text style={styles.highlightText}>{h.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.stackRow}>
        {project.stack.map((s, i) => (
          <View key={i} style={[styles.stackTag, { backgroundColor: project.categoryColor + '10' }]}>
            <Text style={[styles.stackTagText, { color: project.categoryColor }]}>{s}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function AdditionalCard({ project }) {
  return (
    <View style={styles.additionalCard}>
      <View style={styles.additionalTop}>
        <View style={[styles.typeBadge, { backgroundColor: project.typeColor + '12' }]}>
          <Text style={[styles.typeBadgeText, { color: project.typeColor }]}>{project.type}</Text>
        </View>
        <Text style={styles.additionalPeriod}>{project.period}</Text>
      </View>

      <Text style={styles.additionalTitle}>{project.title}</Text>
      <Text style={styles.additionalDesc}>{project.description}</Text>

      <View style={[styles.highlightPill, { backgroundColor: project.typeColor + '10' }]}>
        <Text style={[styles.highlightPillText, { color: project.typeColor }]}>
          ✦ {project.highlight}
        </Text>
      </View>

      <View style={styles.additionalStackRow}>
        {project.stack.slice(0, 4).map((s, i) => (
          <View key={i} style={styles.additionalTag}>
            <Text style={styles.additionalTagText}>{s}</Text>
          </View>
        ))}
        {project.stack.length > 4 && (
          <View style={styles.additionalTag}>
            <Text style={styles.additionalTagText}>+{project.stack.length - 4}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default function Projects({ onLayout }) {
  return (
    <View style={styles.section} onLayout={onLayout} nativeID="projects">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>Projects</Text>
          <Text style={styles.sectionTitle}>주요 프로젝트</Text>
          <Text style={styles.sectionSub}>실제 서비스에서 만들어낸 성과들입니다</Text>
        </View>

        <View style={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </View>

        <View style={styles.moreHeader}>
          <Text style={styles.moreTitle}>추가 프로젝트</Text>
          <View style={styles.moreDivider} />
        </View>

        <View style={styles.additionalGrid}>
          {additionalProjects.map((project, i) => (
            <AdditionalCard key={i} project={project} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: C.bgAlt,
    paddingVertical: 96,
    paddingHorizontal: 40,
  },
  inner: {
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 56,
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
    marginBottom: 10,
  },
  sectionSub: {
    fontSize: 16,
    color: C.textSub,
  },
  featuredGrid: {
    gap: 24,
    marginBottom: 60,
  },
  featuredCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 32,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: C.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  featuredTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  featuredMeta: {
    alignItems: 'flex-end',
  },
  featuredCompany: {
    fontSize: 13,
    fontWeight: '600',
    color: C.textSub,
  },
  featuredPeriod: {
    fontSize: 12,
    color: C.textMuted,
  },
  featuredTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  featuredDesc: {
    fontSize: 15,
    color: C.textSub,
    lineHeight: 26,
    marginBottom: 24,
  },
  highlightList: {
    gap: 10,
    marginBottom: 24,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  highlightIcon: {
    fontSize: 18,
    width: 24,
    textAlign: 'center',
  },
  highlightText: {
    fontSize: 15,
    fontWeight: '600',
    color: C.text,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: C.borderLight,
    marginBottom: 20,
  },
  stackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  stackTag: {
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 7,
  },
  stackTagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  moreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 28,
  },
  moreTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: C.text,
    whiteSpace: 'nowrap',
  },
  moreDivider: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
  },
  additionalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  additionalCard: {
    flex: 1,
    minWidth: 280,
    maxWidth: 360,
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: C.shadow,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  additionalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  typeBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  additionalPeriod: {
    fontSize: 11,
    color: C.textMuted,
  },
  additionalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: C.text,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  additionalDesc: {
    fontSize: 13,
    color: C.textSub,
    lineHeight: 21,
    marginBottom: 14,
    flex: 1,
  },
  highlightPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 14,
  },
  highlightPillText: {
    fontSize: 12,
    fontWeight: '700',
  },
  additionalStackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  additionalTag: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: C.bgAlt,
  },
  additionalTagText: {
    fontSize: 11,
    color: C.textMuted,
    fontWeight: '500',
  },
});
