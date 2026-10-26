import { Item } from '../../animations/Motion.jsx';
import { fadeRight } from '../../animations/variants.js';
import Icon from '../ui/Icon.jsx';

export default function HighlightCard({ icon, title, text }) {
  return (
    <Item
      variants={fadeRight}
      className="p-3.5 rounded-lg bg-[#241a17] border border-[#382b26] flex items-center gap-4 transition-transform hover:translate-x-1 duration-200"
    >
      <div className="w-11 h-11 rounded-lg bg-[#ec5b13]/10 border border-[#ec5b13]/30 flex items-center justify-center text-[#ec5b13] flex-shrink-0">
        <Icon name={icon} className="text-[22px]" />
      </div>
      <div>
        <h3 className="text-sm text-[#f5f0eb] font-bold">{title}</h3>
        <p className="text-xs text-[#9e9188]">{text}</p>
      </div>
    </Item>
  );
}
