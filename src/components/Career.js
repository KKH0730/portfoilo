import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { career } from '../data/portfolio';
import C from '../theme/colors';

function ProjectCard({ project, accentColor }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.projectCard}>
      <TouchableOpacity
        style={styles.projectHeader}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <View style={styles.projectTitleRow}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectPeriod}>{project.period}</Text>
        </View>
        <Text style={styles.projectSummary}>{project.summary}</Text>
        <View style={styles.expandBtn}>
          <Text style={[styles.expandBtnText, { color: accentColor }]}>
            {expanded ? '▲ 접기' : '▼ 자세히 보기'}
          </Text>
        </View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.projectDetail}>
          <Text style={styles.detailSectionTitle}>담당 업무</Text>
          {project.tasks.map((task, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={[styles.listBullet, { color: accentColor }]}>•</Text>
              <Text style={styles.listText}>{task}</Text>
            </View>
          ))}

          <Text style={[styles.detailSectionTitle, { marginTop: 16 }]}>성과</Text>
          {project.results.map((result, i) => (
            <View key={i} style={styles.resultItem}>
              <Text style={[styles.resultBullet, { color: accentColor }]}>✓</Text>
              <Text style={[styles.resultText, { color: accentColor }]}>{result}</Text>
            </View>
          ))}

          <View style={styles.stackRow}>
            {project.stack.map((s, i) => (
              <View key={i} style={[styles.stackTag, { backgroundColor: accentColor + '12' }]}>
                <Text style={[styles.stackTagText, { color: accentColor }]}>{s}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

export default function Career({ onLayout }) {
  return (
    <View style={styles.section} onLayout={onLayout} nativeID="career">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>Career</Text>
          <Text style={styles.sectionTitle}>경력 사항</Text>
        </View>

        <View style={styles.timeline}>
          {career.map((company, idx) => (
            <View key={company.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={[styles.timelineDot, { backgroundColor: company.color }]} />
                {idx < career.length - 1 && <View style={styles.timelineLine} />}
              </View>

              <View style={styles.companyBlock}>
                <View style={styles.companyHeader}>
                  <View style={[styles.companyBadge, { backgroundColor: company.color + '15' }]}>
                    <Text style={[styles.companyBadgeText, { color: company.color }]}>
                      {company.period}
                    </Text>
                  </View>
                  <Text style={styles.companyName}>{company.company}</Text>
                  <Text style={styles.companyRole}>{company.role}</Text>
                </View>

                <View style={styles.projectList}>
                  {company.projects.map((project, pIdx) => (
                    <ProjectCard
                      key={pIdx}
                      project={project}
                      accentColor={company.color}
                    />
                  ))}
                </View>
              </View>
            </View>
          ))}
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
  },
  timeline: {
    gap: 0,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 24,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 20,
    paddingTop: 10,
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    zIndex: 1,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: C.border,
    marginTop: 6,
    marginBottom: -6,
  },
  companyBlock: {
    flex: 1,
    paddingBottom: 52,
  },
  companyHeader: {
    marginBottom: 24,
  },
  companyBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  companyBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  companyName: {
    fontSize: 24,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.4,
    marginBottom: 4,
  },
  companyRole: {
    fontSize: 14,
    color: C.textMuted,
    fontWeight: '500',
  },
  projectList: {
    gap: 12,
  },
  projectCard: {
    backgroundColor: C.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
    overflow: 'hidden',
    shadowColor: C.shadow,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  projectHeader: {
    padding: 20,
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
    flex: 1,
  },
  projectPeriod: {
    fontSize: 12,
    color: C.textMuted,
    fontWeight: '500',
  },
  projectSummary: {
    fontSize: 14,
    color: C.textSub,
    lineHeight: 22,
    marginBottom: 12,
  },
  expandBtn: {
    alignSelf: 'flex-start',
  },
  expandBtnText: {
    fontSize: 13,
    fontWeight: '600',
  },
  projectDetail: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: C.borderLight,
    paddingTop: 16,
  },
  detailSectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: C.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
    paddingRight: 8,
  },
  listBullet: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 22,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: C.textSub,
    lineHeight: 22,
  },
  resultItem: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  resultBullet: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 22,
  },
  resultText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    flex: 1,
  },
  stackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 16,
  },
  stackTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  stackTagText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
