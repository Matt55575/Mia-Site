import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLogoWrap}>
            <Image
              src="/Loop & Go Logo.png"
              alt="Loop & Go Logo"
              width={80}
              height={75}
              className={styles.headerLogo}
              priority
            />
          </div>
          <nav className={styles.nav}>
            <a href="#home">Home</a>
            <a href="#story">Our Story</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.heroContentFull}>
          <h1 className={styles.heroTitle}>Welcome to Loop & Go!</h1>
          <h2 className={styles.heroSubtitle}>Unleash Your Creativity, One Bracelet at a Time!</h2>
          <p className={styles.heroText}>
            Hey there, future designers! Are you ready to dive into a world of vibrant colors, endless patterns, and super fun creations? At Loop & Go, we (Mia and Michelle!) are all about bringing you the coolest rubber band bracelets, handmade with love and bursting with personality.
          </p>
          <a className={styles.ctaButton} href="#shop">Shop Bracelets</a>
        </div>
      </section>
      {/* Main Content Grid */}
      <main className={styles.mainGrid}>
        {/* Our Story */}
        <section className={styles.gridSection} id="story">
          <div className={styles.gridImgWrap}>
            <Image src="/Loop & Go Prodaction.png" alt="Mia and Michelle making bracelets together" width={320} height={320} className={styles.gridImg} />
          </div>
          <div className={styles.gridText}>
            <h3>Our Story</h3>
            <p>
              We're two Canadian best friends who absolutely love making bracelets. We started crafting with Rainbow Loom and quickly fell in love with how many amazing designs you can make! We believe everyone can be a designer, and we're here to share our passion and our unique creations with the world!
            </p>
          </div>
        </section>
        {/* Shop Our Bracelets */}
        <section className={styles.gridSection} id="shop">
          <div className={styles.gridText}>
            <h3>Shop Our Bracelets</h3>
            <ul className={styles.features}>
              <li>Handmade with care by Mia & Michelle</li>
              <li>Crafted with durable rubber bands</li>
              <li>Designed for comfort and style</li>
              <li>Perfect for gifting or collecting</li>
            </ul>
          </div>
          <div className={styles.gridImgWrap}>
            <Image src="/Loop & Go Work.png" alt="Bracelets and happy creators" width={320} height={320} className={styles.gridImg} />
          </div>
          <div style={{gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: 16}}>
            <a className={styles.ctaButton} href="#contact">Contact Us to Order</a>
          </div>
        </section>
        {/* Why Choose Loop & Go? */}
        <section className={styles.whySection} id="why">
          <h3>Why Choose Loop & Go?</h3>
          <div className={styles.whyContent}>
            <div className={styles.whyText}>
              <ul className={styles.whyList}>
                <li>🌈 Every bracelet is unique—just like you!</li>
                <li>🧡 We use only safe, high-quality materials</li>
                <li>🎁 Perfect for gifts, parties, or just for fun!</li>
              </ul>
            </div>
            <div className={styles.whyImgWrap}>
              <Image src="/Makeing Bracelates.png" alt="Making bracelets with Loop & Go" width={300} height={300} className={styles.whyImg} />
            </div>
          </div>
        </section>
        {/* Join the Fun */}
        <section className={styles.section} id="contact">
          <h3>Join the Loop & Go Fun!</h3>
          <p>
            Want to see how we make our awesome bracelets? Or maybe get some inspiration for your own creations? Follow us on social media and become part of our creative community!
          </p>
          <a className={styles.ctaButton} href="#shop">Start exploring our collection!</a>
        </section>
      </main>
      {/* Footer */}
      <footer className={styles.footer}>
        <span>Made with love by Mia & Michelle &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
