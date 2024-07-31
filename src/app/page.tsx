import { Button } from "@/components";
import styles from "./page.module.css";
import { GoArrowDownRight } from "react-icons/go";


export default function Home() {
  return (
    <main className={styles.main}>
      <Button label={"Watch The Trailer"}  size="large" />
      <br/>
      <Button label={"Watch The Trailer"}  size="large" variant="secondary" />
      <br/>
      <Button label={"Watch The Trailer"}  size="large"  icon={<GoArrowDownRight size={45}/>}/>
    </main>
  );
}
