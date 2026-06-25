import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, LayoutChangeEvent } from 'react-native';
import { personal } from '../data/portfolio';
import C from '../theme/colors';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  url: string;
  color: string;
}

const contactItems: ContactItem[] = [
  {
    icon: '📧',
    label: '이메일',
    value: 'bravery712@gmail.com',
    url: 'mailto:bravery712@gmail.com',
    color: '#4F46E5',
  },
  {
    icon: '📞',
    label: '전화',
    value: '010-3005-2677',
    url: 'tel:010-3005-2677',
    color: '#0D9488',
  },
  {
    icon: '💼',
    label: 'GitHub',
    value: 'github.com/KKH0730',
    url: 'https://github.com/KKH0730',
    color: '#4F46E5',
  },
  {
    icon: '📝',
    label: '기술 블로그',
    value: 'smashandroid.tistory.com',
    url: 'https://smashandroid.tistory.com',
    color: '#EA580C',
  },
];

interface ContactProps {
  onLayout: (e: LayoutChangeEvent) => void;
}

export default function Contact({ onLayout }: ContactProps) {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.section} onLayout={onLayout} nativeID="contact">
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.sectionLabel}>Contact</Text>
        </View>

        <View style={styles.contactGrid}>
          {contactItems.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.contactCard}
              onPress={() => openLink(item.url)}
              activeOpacity={0.8}
            >
              <View style={[styles.contactIconBox, { backgroundColor: item.color + '12' }]}>
                <Text style={styles.contactIcon}>{item.icon}</Text>
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>{item.label}</Text>
                <Text style={[styles.contactValue, { color: item.color }]}>{item.value}</Text>
              </View>
              <Text style={[styles.contactArrow, { color: item.color }]}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerName}>{personal.name} · {personal.role}</Text>
          <Text style={styles.footerCopy}>
            © 2026 Kyungho Kim. Built with React Native & Expo
          </Text>
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
  inner: {
    maxWidth: 1100,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
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
    marginBottom: 12,
    textAlign: 'center',
  },
  contactGrid: {
    gap: 14,
    marginBottom: 60,
  },
  contactCard: {
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: C.shadow,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  contactIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactIcon: {
    fontSize: 22,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: C.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  contactArrow: {
    fontSize: 20,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 36,
    borderTopWidth: 1,
    borderTopColor: C.border,
    gap: 6,
  },
  footerName: {
    fontSize: 15,
    fontWeight: '700',
    color: C.text,
  },
  footerCopy: {
    fontSize: 13,
    color: C.textMuted,
  },
});
