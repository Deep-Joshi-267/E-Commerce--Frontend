import { useState } from "react";

const TwitterIcon = () => (
  <svg style={{ width: 24, height: 24, fill: "currentColor" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
  </svg>
);

const InstagramIcon = () => (
  <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24, color: "#3b82f6", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24, color: "#3b82f6", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24, color: "#3b82f6", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const styles = {
  section: {
    backgroundColor: "#fff",
    minHeight: "100vh",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  // container: {
  //   maxWidth: 1100,
  //   margin: "0 auto",
  //   padding: "48px 24px",
  // },
  // row: {
  //   display: "flex",
  //   alignItems: "center",
  //   gap: 48,
  // },
  leftCol: {
    flex: 1,
    minWidth: 0,
  },
  rightCol: {
    flex: 1,
    minWidth: 0,
  },
  heading: {
    fontSize: 28,
    fontWeight: 600,
    color: "#1e293b",
    lineHeight: 1.3,
    marginBottom: 32,
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    marginBottom: 32,
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  contactText: {
    color: "#4b5563",
    fontSize: 15,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 260,
  },
  followLabel: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 12,
  },
  socialRow: {
    display: "flex",
    gap: 16,
  },
  socialLink: {
    color: "#9ca3af",
    transition: "color 0.2s",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: "40px 32px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 500,
    color: "#374151",
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    display: "block",
    fontSize: 13,
    color: "#4b5563",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    fontSize: 14,
    color: "#374151",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    fontSize: 14,
    color: "#374151",
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    resize: "vertical",
    minHeight: 150,
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: 8,
    backgroundColor: "#3b82f6",
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "0.05em",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    transition: "background-color 0.2s",
    textTransform: "capitalize",
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: <TwitterIcon />, href: "#", label: "Twitter" },
    { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
    { icon: <FacebookIcon />, href: "#", label: "Facebook" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  ];

  const focusStyle = {
    borderColor: "#60a5fa",
    boxShadow: "0 0 0 3px rgba(96,165,250,0.25)",
  };

  return (
    // <section style={styles.section}>
    //   <div style={styles.container}>
    //     <div style={styles.row}>
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Contact Info ── */}
          <div style={styles.leftCol}>
            <h1 style={styles.heading}>
              Contact us for<br />more info
            </h1>

            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <LocationIcon />
                <span style={styles.contactText}>
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </div>
              <div style={styles.contactItem}>
                <PhoneIcon />
                <span style={styles.contactText}>(257) 563-7401</span>
              </div>
              <div style={styles.contactItem}>
                <EmailIcon />
                <span style={styles.contactText}>acb@example.com</span>
              </div>
            </div>

            <p style={styles.followLabel}>Follow us</p>
            <div style={styles.socialRow}>
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    ...styles.socialLink,
                    color: hoveredSocial === label ? "#3b82f6" : "#9ca3af",
                  }}
                  onMouseEnter={() => setHoveredSocial(label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div style={styles.rightCol}>
            <div style={styles.card}>
              <p style={styles.cardTitle}>What do you want to ask</p>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...styles.input, ...(focusedField === "fullName" ? focusStyle : {}) }}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...styles.input, ...(focusedField === "email" ? focusStyle : {}) }}
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...styles.textarea, ...(focusedField === "message" ? focusStyle : {}) }}
                />
              </div>

              <button
                onClick={handleSubmit}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  ...styles.button,
                  backgroundColor: btnHovered ? "#60a5fa" : "#3b82f6",
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}