import Link from "next/link";
import styles from "common/styles/Nav.module.css";

export default function basic(){
  return (
    <nav className={basic}>
      <ul>
        <li><Link href='/basic/calc'><h2>Calculator</h2></Link> </li>
        <li><Link href='/basic/counter'><h2>Counter</h2></Link> </li>
        <li><Link href='/basic/bmi'><h2>BMI</h2></Link> </li>
      </ul>
    </nav>
  );
};  