import Image from "next/image";
import styles from "@/styles/OurStory.module.css";

export default function OurStory() {
  return (
    <div className={styles.storyPage}>
      <div className={styles.storyInner}>
        {/* HER SIDE */}
        <section className={styles.storySection}>
          <div className={styles.sectionTitle}>
            <span className={styles.word}>
              <span className={styles.letter}>H</span>er
            </span>
            <span className={styles.word}>
              <span className={styles.letter}>S</span>tory
            </span>
          </div>

          <div className={styles.story}>
            <p>
              We met in January 2018 in our Business Information Systems class
              at SF State. I thought he was handsome, sweet, and had this calm
              presence that made him stand out. It was the type of quiet crush
              you keep to yourself and tell your best friends about, never
              imagining anything would actually happen.
            </p>
            <p>
              After our final exam, we said a quick goodbye in the hallway and
              started heading to our cars. A few minutes later, my phone rang.
              It was him, asking if I wanted to go to the mall with him while he
              picked out an engagement gift for his brother. I still remember
              the little shock I felt, followed by the “OMG wait what” texts and
              calls to my best friends. That tiny, unexpected call became the
              moment everything shifted.
            </p>
            <p>
              Our first real date was at the Sutro Baths in San Francisco. We
              hiked down by the ocean and sat together as the sun dipped into
              the horizon. Being with him felt peaceful and strangely familiar,
              even though we were only at the beginning.
            </p>
            <p>
              I realized he was the one during our first trip to Disneyland.
              Traveling together felt so effortless and joyful. He made even the
              simplest moments feel fun and comfortable. Every trip after that
              just confirmed what my heart already knew. And when he instantly
              loved Koko, quirks and all, my heart practically melted.
            </p>
            <p>
              The proposal happened on the most beautiful morning in Lake Como on August 2023.
              We were on a private boat gliding across the water when he asked
              me to marry him at Villa Balbiano, the breathtaking place where
              Padmé and Anakin were married in Star Wars. I was overwhelmed with
              love, joy, and disbelief at how perfect the moment felt. It was
              everything I could have dreamed of.
            </p>
          </div>

          <div className={styles.storyImageCard}>
            <Image
              src="/images/her-story.png"
              alt="Her story image"
              width={900}
              height={506}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              quality={100}
            />
          </div>
        </section>

        {/* HIS SIDE */}
        <section className={styles.storySection}>
          <div className={styles.sectionTitle}>
            <span className={styles.word}>
              <span className={styles.letter}>H</span>is
            </span>
            <span className={styles.word}>
              <span className={styles.letter}>S</span>tory
            </span>
          </div>

          <div className={styles.story}>
            <p>
              We met in Business Information Systems at SF State. The first day
              she walked into class, wearing her hat and glasses, I noticed her
              immediately. Her warm smile, kind eyes, and calm energy stood out.
              She sat next to me, which I jokingly tell her was her first move.
              My first move was asking her to hang out after finals.
            </p>
            <p>
              In my memory, our first date was at Stern Grove, where we walked
              and talked for what felt like hours. I remember feeling comfortable
              right away, as if I had known her much longer than just a few
              months.
            </p>
            <p>
              I knew she was the one during our first group project together.
              Her dedication, positivity, responsibility, and proactive nature
              showed me exactly who she was. Everything about her aligned with
              what I hoped for in a partner.
            </p>
            <p>
              When it came time for the proposal, I felt confident and excited.
              I knew she would love the moment, the setting, and the thought
              behind it. I was simply looking forward to the joy on her face.
            </p>
          </div>

          <div className={styles.storyImageCard}>
            <Image
              src="/images/his-story.png"
              alt="His story image"
              width={900}
              height={506}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              quality={100}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
