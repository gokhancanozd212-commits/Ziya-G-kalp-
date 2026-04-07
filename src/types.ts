export interface Work {
  title: string;
  description: string;
  year?: string;
  category: 'Şiir' | 'Sosyoloji' | 'Makale' | 'Masal';
  details?: string[];
}

export interface AnimationItem {
  id: string;
  title: string;
  description: string;
  color: string;
}

export type Section = 'home' | 'life' | 'turkism' | 'works' | 'thanks';
