import styles from "./tag.module.css";
const Tag = ({ tag }: { tag: string }) => (
  <div className={styles.tag}>
    <span className={styles.tag_text}>{tag}</span>
  </div>
);

export default Tag;
