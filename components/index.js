import Image from "next/image";
import styles from "./index.module.css"
function Illustration() {
  return (
    <Image
      src="/images/illustration-sign-up-mobile.svg"
      width={500}
      height={400}
    ></Image>
  );
}
function List({ src, content }) {
  return (
    <section className={styles.li}>
      <Image src={src} width={20} height={20}></Image>
      <p>{content}</p>
    </section>
  );
}

function Form() {
  return (
    <form action="">
      <label htmlFor="email">Email Address:</label>
      <br></br>
      <input type="text" id="email" name="email" />
      <br></br>
      <button type="submit">Subscribe to monthly Newsletter</button>
    </form>
  );
}

export default function Section() {
  return (
    <section >
      <section>
        <Illustration />
      </section>
      <section className={styles.container}>
        <h1 className={styles.h1}> Stay Updated!</h1>
        <p className={styles.sub}> Join 60,000+ product managers receiving monthly update on</p>
        <ul>
          <li>
            <List
              src="/images/icon-list.svg"
              content="Product discovery and building what matters"
            />
          </li>
          <li>
            <List
              src="/images/icon-list.svg"
              content=" Measuring to ensure updates are a success"
            />
          </li>
          <li>
            <List src="/images/icon-list.svg" content=" And much more!" />
          </li>
        </ul>
        <Form />
      </section>
    </section>
  );
}
