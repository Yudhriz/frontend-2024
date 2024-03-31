import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>
            Genre: Thriller, Drama, Romance
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            inventore non maxime sint eligendi totam esse aut officia quod
            eveniet nemo minus sapiente assumenda possimus vitae, nulla est!
            Quo, nihil.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src='https://picsum.photos/536/354'
            alt='placeholder'
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
