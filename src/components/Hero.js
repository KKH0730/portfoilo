import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { personal } from '../data/portfolio';
import C from '../theme/colors';

export default function Hero({ onLayout }) {
  const openLink = (url) => Linking.openURL(url);

  return (
    <View style={styles.section} onLayout={onLayout} nativeID="hero">
      <View style={styles.inner}>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>Available for opportunities</Text>
          </View>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.nameEn}>{personal.nameEn}</Text>
          <Text style={styles.nameKo}>{personal.name}</Text>
        </View>

        <Text style={styles.headline}>{personal.headline}</Text>

        <View style={styles.ctaRow}>
          <TouchableOpacity
            style={styles.ctaPrimary}
            onPress={() => openLink(personal.github)}
            activeOpacity={0.85}
          >
            <Text style={styles.ctaPrimaryText}>GitHub</Text>
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

        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>📧 {personal.email}</Text>
          <Text style={styles.contactDivider}>·</Text>
          <Text style={styles.contactItem}>📞 {personal.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    minHeight: 580,
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 100,
  },
  inner: {
    maxWidth: 720,
    width: '100%',
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: C.accentDim,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.accent + '30',
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },
  badgeText: {
    color: C.accent,
    fontSize: 13,
    fontWeight: '600',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  nameEn: {
    fontSize: 52,
    fontWeight: '800',
    color: C.text,
    letterSpacing: -1.5,
    lineHeight: 60,
  },
  nameKo: {
    fontSize: 28,
    fontWeight: '700',
    color: C.textSub,
    letterSpacing: -0.5,
  },
  headline: {
    fontSize: 20,
    fontWeight: '500',
    color: C.textSub,
    lineHeight: 32,
    marginBottom: 12,
  },
  quote: {
    fontSize: 14,
    color: C.textMuted,
    lineHeight: 24,
    fontStyle: 'italic',
    borderLeftWidth: 3,
    borderLeftColor: C.accent,
    paddingLeft: 16,
    marginBottom: 36,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  ctaPrimary: {
    backgroundColor: C.accent,
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 10,
  },
  ctaPrimaryText: {
    color: C.white,
    fontSize: 15,
    fontWeight: '700',
  },
  ctaSecondary: {
    backgroundColor: C.white,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: C.border,
  },
  ctaSecondaryText: {
    color: C.text,
    fontSize: 15,
    fontWeight: '600',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 13,
    color: C.textMuted,
  },
  contactDivider: {
    color: C.textMuted,
    fontSize: 13,
  },

});
