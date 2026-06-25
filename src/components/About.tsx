import React from 'react';
import { View, Text, StyleSheet, LayoutChangeEvent, useWindowDimensions } from 'react-native';
import C from '../theme/colors';

interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

const pillars: Pillar[] = [
  {
    icon: '📱',
    title: 'Android 개발',
    desc: 'PC방 7,000+ 매장 도입 앱 단독 개발. 누적 다운로드 15만+.',
  },
  {
    icon: '🏗️',
    title: '아키텍처 설계',
    desc: 'Java → Kotlin, MVP → Clean Architecture + MVVM or MVI 전환 주도. 유지보수 가능한 구조를 처음부터 설계합니다.',
  },
  {
    icon: '💳',
    title: '결제 시스템',
    desc: '인앱 결제·PG 연동·정기 결제 구현부터 오류 추적까지. 월간 결제 오류 발생률 90% 감소.',
  },
  {
    icon: '🤖',
    title: 'AI 도구 활용',
    desc: 'Claude Code·Gemini를 실제 업무에 적용. 코드 리뷰·배포 노트·이슈 생성 자동화.',
  },
  {
    icon: '⚙️',
    title: 'CI/CD 자동화',
    desc: '브랜치 푸시 한 번으로 빌드·배포·Slack 알림까지. GitLab CI/CD·Jenkins 파이프라인 직접 설계.',
  },
  {
    icon: '🔐',
    title: '인증 & 보안',
    desc: 'Google·Naver·Kakao·Apple OAuth 4종 연동. 계정 통합 이후 앱 설치 수 19.3% 증가.',
  },
];

interface AboutProps {
  onLayout: (e: LayoutChangeEvent) => void;
}

export default function About({ onLayout }: AboutProps) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]} onLayout={onLayout} nativeID="about">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>About</Text>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>아키텍처 설계부터 CI/CD 자동화, AI 활용까지</Text>
        </View>

        <View style={styles.pillarsGrid}>
          {pillars.map((p, i) => (
            <View key={i} style={styles.pillarCard}>
              <Text style={styles.pillarIcon}>{p.icon}</Text>
              <Text style={styles.pillarTitle}>{p.title}</Text>
              <Text style={styles.pillarDesc}>{p.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: C.bgAlt,
    paddingVertical: 64,
    paddingHorizontal: 40,
  },
  sectionMobile: {
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  sectionTitleMobile: {
    fontSize: 22,
    letterSpacing: -0.4,
  },
  inner: {
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 48,
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
    marginBottom: 16,
  },
  pillarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  pillarCard: {
    flex: 1,
    minWidth: 280,
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: C.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  pillarIcon: {
    fontSize: 28,
    marginBottom: 14,
  },
  pillarTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  pillarDesc: {
    fontSize: 14,
    color: C.textSub,
    lineHeight: 22,
  },
});
