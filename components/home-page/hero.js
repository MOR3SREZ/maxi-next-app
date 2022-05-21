/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

//styles
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/mores.jpg'
          alt='Mores'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mores</h1>
      <p>
        I write about web development blog to other to use and enjoy and Lorem
        ipsum dolor sit amet.
      </p>
    </section>
  );
};
export default Hero;
