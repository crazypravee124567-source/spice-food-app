import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FormField, { inputClass } from '../ui/FormField.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import ReservationSuccess from './ReservationSuccess.jsx';
import { Stagger, Item } from '../../animations/Motion.jsx';
import { fadeRight } from '../../animations/variants.js';

const TIMES = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
const GUESTS = ['1 Person', '2 People', '3 People', '4 People', '6 People', '8+ People', 'Private Dining Hall'];

const today = () => new Date().toISOString().slice(0, 10);

const initialState = () => ({
  fullName: '',
  phone: '',
  email: '',
  reservationDate: today(),
  reservationTime: '1:00 PM',
  guestCount: '2 People',
  specialRequests: '',
});

export default function ReservationForm({ onSubmitted }) {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const bind = (key) => ({
    value: form[key],
    onChange: (e) => setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitted?.(form);
  };

  const reset = () => {
    setForm(initialState());
    setSubmitted(false);
  };

  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      animate="show"
      className="w-full lg:w-[55%]"
    >
      <div className="bg-[#241a17] rounded-lg shadow-2xl p-6 sm:p-8 border border-[#382b26]">
        <h2 className="text-xl font-bold text-[#f5f0eb] mb-5 font-serif">Your Reservation Details</h2>

        <AnimatePresence mode="wait" initial={false}>
          {submitted ? (
            <ReservationSuccess key="done" data={form} onReset={reset} />
          ) : (
            <motion.form key="form" exit={{ opacity: 0, y: -10 }} onSubmit={handleSubmit}>
              <Stagger inView={false} gap={0.07} delay={0.3} className="space-y-4">
                <Item>
                  <FormField label="Full Name" htmlFor="fullName">
                    <input id="fullName" type="text" required placeholder="e.g. Anandha Kumar" className={`${inputClass} h-11`} {...bind('fullName')} />
                  </FormField>
                </Item>

                <Item className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Phone Number" htmlFor="phone">
                    <input id="phone" type="tel" required placeholder="+91 98765 00000" className={`${inputClass} h-11`} {...bind('phone')} />
                  </FormField>
                  <FormField label="Email Address" htmlFor="email">
                    <input id="email" type="email" required placeholder="anand@example.com" className={`${inputClass} h-11`} {...bind('email')} />
                  </FormField>
                </Item>

                <Item className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Date" htmlFor="reservationDate">
                    <input id="reservationDate" type="date" required min={today()} className={`${inputClass} h-11`} {...bind('reservationDate')} />
                  </FormField>
                  <FormField label="Time" htmlFor="reservationTime">
                    <select id="reservationTime" className={`${inputClass} h-11`} {...bind('reservationTime')}>
                      {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </FormField>
                </Item>

                <Item>
                  <FormField label="Number of Guests" htmlFor="guestCount">
                    <select id="guestCount" className={`${inputClass} h-11`} {...bind('guestCount')}>
                      {GUESTS.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </FormField>
                </Item>

                <Item>
                  <FormField label="Special Requests (Optional)" htmlFor="specialRequests">
                    <textarea id="specialRequests" rows="3" placeholder="Anniversary, dietary restrictions, quiet table preference..." className={`${inputClass} p-3 resize-none`} {...bind('specialRequests')} />
                  </FormField>
                </Item>

                <Item>
                  <Button type="submit" size="md" icon="calendar_month" iconPosition="left" className="w-full h-12 mt-3">
                    Confirm Reservation
                  </Button>
                  <p className="text-[#9e9188] text-[11px] text-center flex items-center justify-center gap-1.5 pt-3">
                    <Icon name="check_circle" className="text-[#ec5b13] text-[14px]" />
                    <span>Instant confirmation via WhatsApp &amp; Email</span>
                  </p>
                </Item>
              </Stagger>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
