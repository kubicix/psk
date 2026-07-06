import {
  faUser,
  faPuzzlePiece,
  faHeartBroken,
  faChild,
  faLaptop,
  faClipboardCheck,
  faMapMarkerAlt,
  faEnvelope,
  faClock,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Service, Testimonial, GoogleReview, ContactItem, SocialLink } from '@/types';

export const SITE_URL = 'https://www.psikologasyaozcan.com.tr';
export const GBP_URL = 'https://share.google/qD4DmH3iIr6EYw8Ke';

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Ana Sayfa' },
  { href: '#about', label: 'Hakkımda' },
  { href: '#services', label: 'Hizmetler' },
  { href: '#testimonials', label: 'Referanslar' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'İletişim' },
];

export const SERVICES: Service[] = [
  {
    icon: faUser,
    title: 'Bireysel Terapi',
    description: 'Kişisel zorluklar, anksiyete, depresyon and diğer ruhsal sağlık sorunları için birebir destek sağlıyorum.',
  },
  {
    icon: faPuzzlePiece,
    title: 'Özel Eğitim & Otizm',
    description: 'Otizm spektrum bozukluğu, gelişimsel gecikmeler ve öğrenme güçlüğü olan çocuklar için bireyselleştirilmiş eğitim ve terapi programları.',
  },
  {
    icon: faHeartBroken,
    title: 'Depresyon & Anksiyete',
    description: 'Depresyon, yaygın anksiyete bozukluğu, sosyal fobi ve panik atak gibi duygudurum bozuklukları için terapi desteği.',
  },
  {
    icon: faChild,
    title: 'Çocuk & Genç Psikolojisi',
    description: 'Okul fobisi, davranış sorunları, ergenlik dönemi zorlukları ve kimlik arayışı problemleri için yaş grubuna uygun terapi yaklaşımları.',
  },
  {
    icon: faLaptop,
    title: 'Online Seanslar',
    description: 'İzmit dışından da erişebileceğiniz güvenli online terapi seansları. Esnek saatler ve gizlilik garantisi ile uzaktan psikolojik destek.',
  },
  {
    icon: faClipboardCheck,
    title: 'MMPI & Objektif Testler',
    description: 'Sertifikalı MMPI ve diğer objektif psikolojik testlerle profesyonel değerlendirme ve tanı destek süreçleri sunuyorum.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"Depresyonla mücadelede Asya Hanım\'dan aldığım destek hayatımı değiştirdi. Terapi yaklaşımı çok etkili oldu. Artık hayata daha pozitif bakıyorum."',
    author: 'Mehmet K.',
  },
  {
    quote: '"Otizm spektrum bozukluğu olan kızım için hazırlanan bireyselleştirilmiş program ve aile katılımı sayesinde sosyal becerilerinde büyük gelişim gözledik. Çok memnunuz."',
    author: 'Fatma K. (Anne)',
  },
  {
    quote: '"Online seanslar sayesinde İstanbul\'dan İzmit\'e gitmeden terapi alabildim. Video görüşmeler çok profesyonel ve gizlilik konusunda endişem olmadı. Çok pratik!"',
    author: 'Ahmet B. (İstanbul)',
  },
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    initial: 'S',
    bgColor: 'bg-purple',
    authorName: 'Sena Kazan',
    score: '5/5',
    time: '3 ay önce',
    text: 'o kadar tatlı ve samimi biri ki gerçekten seansta olduğumu anlamadan çok doğal gelişiyor her şey 🫶',
  },
  {
    initial: 'K',
    bgColor: 'bg-teal',
    authorName: 'Kübra Taşcı',
    score: '5/5',
    time: '3 ay önce',
    text: 'İşini severek yapan, insanlara gerçekten dokunan bir psikolog. Enerjisi ve samimiyetiyle farkını hemen hissettiriyor.',
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: faInstagram,
    title: 'Instagram',
    content: '@psikologasyaozcan',
    href: 'https://www.instagram.com/psikologasyaozcan/',
  },
  {
    icon: faEnvelope,
    title: 'E-posta',
    content: 'psikologasyaozcan@gmail.com',
    href: 'mailto:psikologasyaozcan@gmail.com',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Adres',
    content: 'İzmit, Kocaeli\nTürkiye',
  },
  {
    icon: faClock,
    title: 'Çalışma Saatleri',
    content: 'Pazartesi - Cumartesi\n09:00 - 18:00',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/in/asya-ozcan/',
    label: 'LinkedIn',
  },
  {
    icon: faMapMarkerAlt,
    href: GBP_URL,
    label: 'Konum',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/psikologasyaozcan/',
    label: 'Instagram',
  },
];

export const MAPS_IFRAME_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0660668980313!2d29.932822299999998!3d40.76229839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb457e887328c7%3A0xd43ccb3d60c9347f!2zxLB6bWl0IEtlbnQgTWV5ZGFuxLE!5e1!3m2!1str!2str!4v1770936844413!5m2!1str!2str';
