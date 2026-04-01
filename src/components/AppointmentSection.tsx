import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const buildTimeSlots = (startHour: number, endHour: number) => {
  const slots: string[] = [];

  for (let hour = startHour; hour < endHour; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }

  return slots;
};

const formatTo12Hour = (time: string) => {
  const [hourText, minute] = time.split(":");
  const hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  const normalizedHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${normalizedHour}:${minute} ${suffix}`;
};

const AppointmentSection = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const doctor = params.get("doctor");
    const shouldScrollToAppointment = params.get("book");

    if (doctor) {
      setSelectedDoctor(doctor);
    }

    if (shouldScrollToAppointment === "true") {
      setTimeout(() => {
        document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      const nextParams = new URLSearchParams(location.search);
      nextParams.delete("book");
      const nextSearch = nextParams.toString();
      window.history.replaceState({}, "", `${location.pathname}${nextSearch ? `?${nextSearch}` : ""}`);
    }
  }, [location.pathname, location.search]);

  const availableTimes = useMemo(() => {
    if (!appointmentDate) return [];

    const selectedDate = new Date(`${appointmentDate}T00:00:00`);
    const day = selectedDate.getDay();

    if (day === 0) return [];
    if (day === 5) return buildTimeSlots(15, 19);

    return buildTimeSlots(14, 22);
  }, [appointmentDate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Appointment request submitted successfully!");
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Appointment</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 mb-3 sm:mb-4">
              Book Your Appointment
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              Fill in the form and our team will get back to you within 24 hours to confirm your appointment.
            </p>

            <div className="bg-hero-gradient rounded-2xl p-6 sm:p-8 text-primary-foreground">
              <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3 sm:mb-4">Clinic Hours</h3>
              <div className="space-y-2.5 sm:space-y-3 text-sm text-primary-foreground/80">
                <div className="flex justify-between"><span>Monday - Thursday</span><span>2:00 PM - 10:00 PM</span></div>
                <div className="flex justify-between"><span>Friday</span><span>3:00 PM - 7:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>2:00 PM - 10:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Off</span></div>
              </div>
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70">Emergency? Call us now</p>
                <a href="tel:+923322225742" className="text-lg font-heading font-bold">+92 332 2225742</a>
                <br />
                <a href="tel:+92512752441" className="text-sm text-primary-foreground/80">PTCL: 051-2752441</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-card rounded-2xl shadow-card border border-border p-8 sm:p-12 text-center">
                <CheckCircle2 className="h-14 w-14 sm:h-16 sm:w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-card-foreground mb-2">Request Received!</h3>
                <p className="text-muted-foreground text-sm sm:text-base">We'll contact you shortly to confirm your appointment.</p>
                <Button className="mt-5 sm:mt-6" onClick={() => setSubmitted(false)}>Book Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card border border-border p-5 sm:p-8 space-y-4 sm:space-y-5">
                <div className="flex items-center gap-2 text-primary mb-1 sm:mb-2">
                  <CalendarCheck className="h-5 w-5" />
                  <span className="font-heading font-semibold text-sm sm:text-base">Appointment Form</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Input placeholder="Patient Name" required />
                  <Input placeholder="Phone Number" type="tel" required />
                </div>
                <Input placeholder="Email Address (optional)" type="email" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Select required value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger><SelectValue placeholder="Select Doctor" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="abubakar">Dr. Abubakar Abdullah</SelectItem>
                      <SelectItem value="shaharyar">Dr. Shaharyar Khan Niazi</SelectItem>
                      <SelectItem value="fareed">Dr. Fareed Sher Muhammad</SelectItem>
                      <SelectItem value="rida">Dr. Rida Khan</SelectItem>
                      <SelectItem value="sana">Dr. Sana Tariq</SelectItem>
                      <SelectItem value="hira-hafeez">Dr. Hira Hafeez</SelectItem>
                      <SelectItem value="ibrahim-naeem">Dr. M. Ibrahim Naeem</SelectItem>
                      <SelectItem value="fatima-azam">Dr. Fatima Azam</SelectItem>
                      <SelectItem value="arsalan-hayat">Arsalan Hayat</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select required>
                    <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Dental Services</SelectLabel>
                        <SelectItem value="filling">Tooth Filling</SelectItem>
                        <SelectItem value="extraction">Teeth Extraction</SelectItem>
                        <SelectItem value="alignment">Tooth Alignment</SelectItem>
                        <SelectItem value="rootcanal">Root Canal Treatment</SelectItem>
                        <SelectItem value="scaling">Scaling & Polishing</SelectItem>
                        <SelectItem value="whitening">Tooth Whitening</SelectItem>
                        <SelectItem value="metalcrown">Metal Crown</SelectItem>
                        <SelectItem value="zirconia">Zirconia Crown</SelectItem>
                        <SelectItem value="hollywood">Hollywood Smile</SelectItem>
                        <SelectItem value="implants">Dental Implants</SelectItem>
                        <SelectItem value="aligners">Invisible Aligners</SelectItem>
                        <SelectItem value="children">Children Dental</SelectItem>
                        <SelectItem value="artificial">Artificial Teeth</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Aesthetic Services</SelectLabel>
                        <SelectItem value="hydrafacial">Hydra Facial</SelectItem>
                        <SelectItem value="prphair">PRP - Hair</SelectItem>
                        <SelectItem value="prpface">PRP - Face</SelectItem>
                        <SelectItem value="hairrejuv">Hair Rejuvenation</SelectItem>
                        <SelectItem value="microneedling">Micro Needling</SelectItem>
                        <SelectItem value="mesotherapy">Mesotherapy</SelectItem>
                        <SelectItem value="chemicalpeel">Chemical Peel</SelectItem>
                        <SelectItem value="brightening">Brightening Injections</SelectItem>
                        <SelectItem value="faceslimming">Face Slimming Injections</SelectItem>
                        <SelectItem value="botox">Anti Wrinkle Botox</SelectItem>
                        <SelectItem value="fillers">Facial Fillers</SelectItem>
                        <SelectItem value="threadlift">Face Thread Lifts</SelectItem>
                        <SelectItem value="moleremoval">Mole Removal</SelectItem>
                      </SelectGroup>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Date</label>
                    <Input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={appointmentDate}
                      onChange={(e) => {
                        setAppointmentDate(e.target.value);
                        setAppointmentTime("");
                      }}
                      required
                      className="min-h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Time</label>
                    <Select
                      required
                      value={appointmentTime}
                      onValueChange={setAppointmentTime}
                      disabled={!appointmentDate || availableTimes.length === 0}
                    >
                      <SelectTrigger className="min-h-11">
                        <SelectValue
                          placeholder={
                            !appointmentDate
                              ? "Select date first"
                              : availableTimes.length === 0
                                ? "Closed on selected day"
                                : "Select Time"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {formatTo12Hour(time)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {appointmentDate && availableTimes.length === 0 && (
                  <p className="text-sm text-destructive">Appointments are not available on Sundays. Please choose another day.</p>
                )}
                {appointmentDate && availableTimes.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Available timings: {new Date(`${appointmentDate}T00:00:00`).getDay() === 5 ? "Friday 3:00 PM - 7:00 PM" : "2:00 PM - 10:00 PM"}
                  </p>
                )}
                <Textarea placeholder="Additional message (optional)" rows={3} />
                <Button type="submit" size="lg" className="w-full">Submit Appointment Request</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
