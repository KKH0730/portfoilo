import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, LayoutChangeEvent } from 'react-native';
import { featuredProjects, additionalProjects, FeaturedProject, AdditionalProject } from '../data/portfolio';
import C from '../theme/colors';

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

const PHONE_W = 240;
const PHONE_H = 490;
const PHONE_RADIUS = 36;
const SCREEN_RADIUS = 30;
const BEZEL = 11;

function PhoneMockup({ source, style }: { source: any; style?: any }) {
  return (
    <View style={[phoneSt.phone, style]}>
      {/* Side button */}
      <View style={phoneSt.sideBtn} />
      {/* Volume buttons */}
      <View style={[phoneSt.volBtn, { top: 110 }]} />
      <View style={[phoneSt.volBtn, { top: 155 }]} />
      {/* Screen */}
      <View style={phoneSt.screen}>
        <Image source={source} style={phoneSt.screenImg} resizeMode="cover" />
        {/* Dynamic island */}
        <View style={phoneSt.dynamicIsland} />
      </View>
    </View>
  );
}

const phoneSt = StyleSheet.create({
  phone: {
    width: PHONE_W,
    height: PHONE_H,
    borderRadius: PHONE_RADIUS,
    backgroundColor: '#18181b',
    borderWidth: 2,
    borderColor: '#3f3f46',
    overflow: 'visible',
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  sideBtn: {
    position: 'absolute',
    right: -3.5,
    top: 68,
    width: 3,
    height: 48,
    borderRadius: 2,
    backgroundColor: '#3f3f46',
  },
  volBtn: {
    position: 'absolute',
    left: -3.5,
    width: 3,
    height: 26,
    borderRadius: 2,
    backgroundColor: '#3f3f46',
  },
  screen: {
    position: 'absolute',
    top: BEZEL,
    left: BEZEL,
    right: BEZEL,
    bottom: BEZEL,
    borderRadius: SCREEN_RADIUS,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  screenImg: {
    width: '100%',
    height: '100%',
  },
  dynamicIsland: {
    position: 'absolute',
    top: 7,
    alignSelf: 'center',
    width: 36,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#18181b',
    zIndex: 2,
  },
});

// ─── Phone Gallery (3 staggered phones) ──────────────────────────────────────

function PhoneGallery({ screenshots, color }: { screenshots: any[]; color: string }) {
  if (!screenshots || screenshots.length < 3) return null;
  return (
    <View style={galSt.wrap}>
      {/* Background glow */}
      <View style={[galSt.glow, { backgroundColor: color + '18' }]} />
      {/* Left phone */}
      <PhoneMockup
        source={screenshots[1]}
        style={[galSt.phoneLeft, { transform: [{ rotate: '-8deg' }, { translateY: 20 }] }]}
      />
      {/* Center phone (front) */}
      <PhoneMockup
        source={screenshots[0]}
        style={[galSt.phoneCenter]}
      />
      {/* Right phone */}
      <PhoneMockup
        source={screenshots[2]}
        style={[galSt.phoneRight, { transform: [{ rotate: '8deg' }, { translateY: 20 }] }]}
      />
    </View>
  );
}

// ─── Featured Card ──────────────────────────────────────────────────────────

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const color = project.categoryColor;
  return (
    <View style={styles.featuredCard}>
      {/* Accent strip */}
      <View style={[styles.featuredAccent, { backgroundColor: color }]} />

      {/* Content row: info + phone gallery */}
      <View style={styles.featuredRow}>
        <View style={styles.featuredBody}>
          {/* Header row */}
          <View style={styles.featuredHead}>
            <View style={styles.featuredHeadLeft}>
              {project.logo && (
                <View style={[styles.projectLogoWrap, { backgroundColor: color + '12' }]}>
                  <Image source={project.logo} style={styles.projectLogo} resizeMode="contain" />
                </View>
              )}
              <View style={styles.featuredHeadMeta}>
                <View style={[styles.categoryBadge, { backgroundColor: color + '15' }]}>
                  <Text style={[styles.categoryBadgeText, { color }]}>{project.category}</Text>
                </View>
                <Text style={styles.featuredTitle}>{project.title}</Text>
                <Text style={styles.featuredCompanyPeriod}>
                  {project.company} · {project.period}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.featuredDesc}>{project.description}</Text>

          {/* Two-column: features + achievements */}
          <View style={styles.infoRow}>
            {/* 핵심기능 */}
            <View style={styles.infoCol}>
              <Text style={[styles.infoSectionTitle, { color }]}>핵심기능</Text>
              <View style={styles.featureList}>
                {project.features.map((f, i) => (
                  <View key={i} style={styles.featureItem}>
                    <View style={[styles.featureDot, { backgroundColor: color }]} />
                    <Text style={styles.featureText}>{f}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={[styles.colDivider, { backgroundColor: color + '20' }]} />

            {/* 주요 성과 */}
            <View style={styles.infoCol}>
              <Text style={[styles.infoSectionTitle, { color }]}>주요 성과</Text>
              <View style={styles.achievementList}>
                {project.highlights.map((h, i) => (
                  <View key={i} style={styles.achievementItem}>
                    <Text style={styles.achievementIcon}>{h.icon}</Text>
                    <Text style={styles.achievementText}>{h.text}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 기술스택 */}
          <View style={styles.stackSection}>
            <View style={styles.stackRow}>
              {project.stack.map((s, i) => (
                <View key={i} style={[styles.stackTag, { backgroundColor: color + '10' }]}>
                  <Text style={[styles.stackTagText, { color }]}>{s}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Phone Gallery */}
        {project.screenshots && project.screenshots.length >= 3 && (
          <View style={[styles.phoneGalleryWrap, { borderLeftColor: color + '15' }]}>
            <PhoneGallery screenshots={project.screenshots} color={color} />
          </View>
        )}
      </View>
    </View>
  );
}

// ─── Additional Card ─────────────────────────────────────────────────────────

function AdditionalCard({ project, horizontal, cardWidth }: { project: AdditionalProject; horizontal?: boolean; cardWidth?: number }) {
  return (
    <View style={[styles.additionalCard, cardWidth != null && { width: cardWidth }, horizontal && { flexShrink: 0 }]}>
      <View style={styles.additionalTop}>
        <View style={styles.additionalTopLeft}>
          {project.logo ? (
            <View
              style={[styles.additionalLogoWrap, { backgroundColor: project.typeColor + '12' }]}
            >
              <Image source={project.logo} style={styles.additionalLogo} resizeMode="contain" />
            </View>
          ) : (
            <View
              style={[
                styles.additionalLogoWrap,
                styles.additionalLogoPlaceholder,
                { backgroundColor: project.typeColor + '12' },
              ]}
            >
              <Text style={[styles.additionalLogoEmoji, { color: project.typeColor }]}>
                {project.logoEmoji ?? (project.type === 'AI 도구' ? '🤖' : '📱')}
              </Text>
            </View>
          )}
          <View style={styles.additionalTopMeta}>
            <View style={[styles.typeBadge, { backgroundColor: project.typeColor + '12' }]}>
              <Text style={[styles.typeBadgeText, { color: project.typeColor }]}>
                {project.type}
              </Text>
            </View>
            <Text style={styles.additionalTitle}>{project.title}</Text>
          </View>
        </View>
        <Text style={styles.additionalPeriod}>{project.period}</Text>
      </View>

      <Text style={styles.additionalDesc}>{project.description}</Text>

      <View style={[styles.highlightPill, { backgroundColor: project.typeColor + '10' }]}>
        <Text style={[styles.highlightPillText, { color: project.typeColor }]}>
          ✦ {project.highlight}
        </Text>
      </View>

      <View style={styles.stackSpacer} />

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

// ─── Projects Section ────────────────────────────────────────────────────────

interface ProjectsProps {
  onLayout: (e: LayoutChangeEvent) => void;
}

export default function Projects({ onLayout }: ProjectsProps) {
  const personalScrollRef = useRef<any>(null);
  const sideScrollRef = useRef<any>(null);
  const [cardWidth, setCardWidth] = useState(352);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Inject CSS to hide scrollbars
    const styleId = 'hscroll-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `#personal-project-scroll::-webkit-scrollbar,#side-project-scroll::-webkit-scrollbar{display:none!important}#personal-project-scroll,#side-project-scroll{scrollbar-width:none!important;-ms-overflow-style:none!important;}`;
      document.head.appendChild(style);
    }

    const setupDrag = (el: HTMLElement) => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      const onMouseDown = (e: MouseEvent) => {
        isDown = true;
        startX = e.pageX - el.getBoundingClientRect().left;
        scrollLeft = el.scrollLeft;
        el.style.cursor = 'grabbing';
        el.style.userSelect = 'none';
      };
      const onMouseUp = () => {
        isDown = false;
        el.style.cursor = 'grab';
        el.style.userSelect = '';
      };
      const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.getBoundingClientRect().left;
        el.scrollLeft = scrollLeft - (x - startX);
      };
      el.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
      return () => {
        el.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      };
    };

    const cleanups: (() => void)[] = [];
    if (personalScrollRef.current) cleanups.push(setupDrag(personalScrollRef.current));
    if (sideScrollRef.current) cleanups.push(setupDrag(sideScrollRef.current));
    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <View style={styles.section} onLayout={onLayout} nativeID="projects">
      <View style={styles.inner} onLayout={(e) => setCardWidth(e.nativeEvent.layout.width * 0.285)}>
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
          <Text style={styles.moreTitle}>그외 프로젝트</Text>
          <View style={styles.moreDivider} />
        </View>

        {(['개인 프로젝트', '사이드 프로젝트', 'AI툴'] as const).map((cat) => {
          const group = additionalProjects.filter((p) => p.category === cat);
          if (!group.length) return null;
          return (
            <View key={cat} style={styles.categorySection}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{cat}</Text>
                <View style={styles.categoryDivider} />
              </View>
              {cat === 'AI툴' ? (
                <View style={styles.additionalGrid}>
                  {group.map((project, i) => (
                    <AdditionalCard key={i} project={project} cardWidth={cardWidth} />
                  ))}
                </View>
              ) : (
                <View
                  ref={cat === '개인 프로젝트' ? personalScrollRef : sideScrollRef}
                  nativeID={cat === '개인 프로젝트' ? 'personal-project-scroll' : 'side-project-scroll'}
                  style={styles.hScrollOuter as any}
                >
                  <View style={styles.additionalGridH}>
                    {group.map((project, i) => (
                      <AdditionalCard key={i} project={project} horizontal cardWidth={cardWidth} />
                    ))}
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  section: {
    backgroundColor: C.bgAlt,
    paddingVertical: 64,
    paddingHorizontal: 40,
  },
  inner: {
    maxWidth: 1440,
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

  // Featured grid
  featuredGrid: {
    gap: 28,
    marginBottom: 64,
  },
  featuredCard: {
    backgroundColor: C.white,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: C.border,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
    flexDirection: 'row',
  },
  featuredAccent: {
    width: 5,
    flexShrink: 0,
  },
  featuredRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  featuredBody: {
    flex: 1,
    padding: 28,
  },
  phoneGalleryWrap: {
    width: 720,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: C.bgAlt,
  },

  // Card header
  featuredHead: {
    marginBottom: 16,
  },
  featuredHeadLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  projectLogoWrap: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },
  projectLogo: {
    width: 56,
    height: 56,
  },
  featuredHeadMeta: {
    flex: 1,
    gap: 6,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 7,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -0.5,
  },
  featuredCompanyPeriod: {
    fontSize: 13,
    color: C.textMuted,
    fontWeight: '500',
  },
  featuredDesc: {
    fontSize: 14,
    color: C.textSub,
    lineHeight: 24,
    marginBottom: 24,
  },

  // Two-column info
  infoRow: {
    flexDirection: 'row',
    gap: 0,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: C.borderLight,
    borderRadius: 14,
    overflow: 'hidden',
  },
  infoCol: {
    flex: 1,
    padding: 18,
  },
  colDivider: {
    width: 1,
  },
  infoSectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  // Features
  featureList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 5,
    flexShrink: 0,
  },
  featureText: {
    fontSize: 13,
    color: C.text,
    lineHeight: 20,
    flex: 1,
    fontWeight: '500',
  },

  // Achievements
  achievementList: {
    gap: 8,
  },
  achievementItem: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  achievementIcon: {
    fontSize: 14,
    width: 20,
    textAlign: 'center',
    flexShrink: 0,
  },
  achievementText: {
    fontSize: 13,
    color: C.text,
    lineHeight: 20,
    flex: 1,
    fontWeight: '500',
  },

  // Stack tags
  stackSection: {
    borderTopWidth: 1,
    borderTopColor: C.borderLight,
    paddingTop: 18,
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

  // More header
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
    ...({ whiteSpace: 'nowrap' } as any),
  },
  moreDivider: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
  },

  // Category
  categorySection: {
    marginBottom: 40,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: C.textSub,
    ...({ whiteSpace: 'nowrap' } as any),
  },
  categoryDivider: {
    flex: 1,
    height: 1,
    backgroundColor: C.borderLight,
  },

  // Additional grid
  additionalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  hScrollOuter: {
    overflowX: 'auto',
    paddingBottom: 8,
    cursor: 'grab',
  } as any,
  additionalGridH: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 16,
  },
  additionalCard: {
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 22,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  additionalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 8,
  },
  additionalTopLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  additionalLogoWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },
  additionalLogoPlaceholder: {},
  additionalLogoEmoji: {
    fontSize: 20,
  },
  additionalLogo: {
    width: 34,
    height: 34,
  },
  additionalTopMeta: {
    flex: 1,
    gap: 4,
  },
  typeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  typeBadgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  additionalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.3,
  },
  additionalPeriod: {
    fontSize: 11,
    color: C.textMuted,
    flexShrink: 0,
  },
  additionalDesc: {
    fontSize: 13,
    color: C.textSub,
    lineHeight: 21,
    marginBottom: 12,
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
  stackSpacer: {
    flex: 1,
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

const galSt = StyleSheet.create({
  wrap: {
    width: 680,
    height: 560,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  glow: {
    position: 'absolute',
    width: 560,
    height: 420,
    borderRadius: 280,
    top: 50,
    left: 50,
  },
  phoneLeft: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  phoneCenter: {
    position: 'absolute',
    zIndex: 3,
    shadowOpacity: 0.55,
    shadowRadius: 24,
  },
  phoneRight: {
    position: 'absolute',
    right: 20,
    zIndex: 2,
  },
});
