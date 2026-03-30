export default {
  meta: {
    title: '株式会社Gold Lavender',
    description: '新宿区を拠点に、ハラール食品・スマートフォン・WiFiレンタル・eSIMサービスを展開する総合商社',
    lang: 'ja',
  },

  nav: {
    about:      '会社概要',
    business:   '事業内容',
    profile:    '会社情報',
    contact:    'お問い合わせ',
    langToggle: 'EN',
  },

  hero: {
    tagline:    '多様な文化をつなぐ、未来を拓く事業。',
    taglineSub: '新宿区から世界へ ― ハラール食品・モバイル・eSIMサービスを展開',
    cta:        '事業内容を見る',
    ctaSecondary: 'お問い合わせ',
  },

  about: {
    sectionLabel: 'ABOUT',
    sectionTitle: 'Gold Lavenderについて',
    lead: '株式会社Gold Lavenderは、2009年の設立以来、東京・新宿区を拠点として多様な文化的背景を持つお客様に向けたサービスを展開してまいりました。',
    body: [
      'ハラール食品の販売・輸入から、中古スマートフォンの買取・販売、WiFiレンタルサービス、そして世界中で使えるeSIMサービスまで、私たちは「つながり」を軸にした事業を4つのブランドで運営しています。',
      '代表取締役 マズムルダル・エムディ・サフィウル・アロムのリーダーシップのもと、多様性と誠実さを経営の柱とし、日本に住む外国籍の方々や訪日旅行者の皆様の生活を豊かにするサービスを提供し続けています。',
    ],
    values: [
      { icon: 'Globe',  title: '多様性',   body: '異なる文化・言語・背景を持つすべての人々をつなぐサービスを提供します。' },
      { icon: 'Shield', title: '誠実さ',   body: '透明性と誠実な取引を経営の基本方針としています。' },
      { icon: 'Zap',    title: '革新性',   body: '常に変化する市場のニーズに対応するため、サービスの革新を続けます。' },
      { icon: 'Heart',  title: '地域貢献', body: '新宿区を中心に、地域社会と共に成長することを大切にしています。' },
    ],
  },

  businesses: {
    sectionLabel: 'BUSINESSES',
    sectionTitle: '私たちのビジネス',
    visitSite:    'サイトを見る',
    units: [
      {
        id:          'halal',
        name:        'Shinjuku Halal Food',
        nameJp:      '新宿ハラールフード',
        category:    'ハラール食品・小売',
        description: '新宿・大久保エリアに実店舗を構えるハラール認証食品の総合スーパーマーケット。オンラインストアも展開し、全国へのお届けも対応しています。イスラム圏の食材・調味料・冷凍食品を幅広く取り揃えています。',
        url:         'https://shinjukuhalalfood.com',
        tag:         '食品・小売',
        logoType:    'image',
        logoFile:    'halal',
      },
      {
        id:          'shirorom',
        name:        'GoldShirorom',
        nameJp:      'ゴールドシロロム',
        category:    'スマートフォン買取・販売',
        description: 'iPhoneをはじめとするスマートフォン・携帯電話の中古買取・販売専門店。高価買取と安心品質を両立し、法人・個人を問わず幅広くご対応いたします。',
        url:         'https://goldshirorom.com',
        tag:         '中古端末・買取',
        logoType:    'image',
        logoFile:    'shirorom',
      },
      {
        id:          'cloudon',
        name:        'CloudOn',
        nameJp:      'クラウドオン',
        category:    'グローバルeSIM',
        description: '世界中で使えるeSIM・データSIMサービス。旅行者・ビジネスパーソン向けに、スマートフォンへの簡単インストールで即座に現地データ通信が可能です。',
        url:         'https://cloudon.app',
        tag:         'eSIM・通信',
        logoType:    'image',
        logoFile:    'cloudon',
      },
    ],
  },

  profile: {
    sectionLabel: 'COMPANY',
    sectionTitle: '会社概要',
    table: [
      { label: '会社名',         value: '株式会社Gold Lavender' },
      { label: '英語社名',       value: 'Gold Lavender Co., Ltd.' },
      { label: '法人番号',       value: '8011101052979', mono: true },
      { label: '古物商許可番号', value: '第304360908828号', mono: true },
      { label: '設立',           value: '2009年5月29日' },
      { label: '代表取締役',     value: 'マズムルダル・エムディ・サフィウル・アロム' },
      { label: '所在地',         value: '〒169-0073 東京都新宿区百人町2-9-2\n岡山ビジネスビル302' },
      { label: '電話番号',       value: '03-5937-4021', tel: true },
      { label: 'メールアドレス', value: 'contact@goldlavender.co.jp', email: true },
      { label: '事業内容',       value: 'ハラール食品販売・中古スマートフォン買取販売・WiFiレンタル・eSIMサービス' },
      { label: 'SNS',            value: 'Facebook: @goldlavenderjp', url: 'https://www.facebook.com/goldlavenderjp' },
    ],
  },

  contact: {
    sectionLabel: 'CONTACT',
    sectionTitle: 'ご連絡はこちら',
    addressLabel: '所在地',
    address:      '〒169-0073 東京都新宿区百人町2-9-2\n岡山ビジネスビル 302号室',
    mapNote:      'JR新大久保駅 徒歩約5分 ／ JR大久保駅 徒歩約3分',
    phoneLabel:   '電話番号',
    phone:        '03-5937-4021',
    emailLabel:   'メールアドレス',
    email:        'contact@goldlavender.co.jp',
    hoursLabel:   '営業時間',
    hours:        '月〜金 10:00〜18:00（土日祝日休）',
    socialLabel:  '公式SNS',
    facebookLabel: 'Facebook 公式ページ',
    facebookUrl:  'https://www.facebook.com/goldlavenderjp',
    mapLabel:     'Googleマップで見る',
    mapUrl:       'https://maps.app.goo.gl/XBK87a7ckWXLjdv57',
  },

  footer: {
    tagline:       '新宿区から世界へ。',
    copyright:     '© 2024 株式会社Gold Lavender. All rights reserved.',
    privacyPolicy: 'プライバシーポリシー',
    links: [
      { label: '会社概要', href: '#about' },
      { label: '事業内容', href: '#businesses' },
      { label: '会社情報', href: '#profile' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
  },
}
