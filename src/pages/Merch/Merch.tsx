// FestMoments.tsx
import styles from "./Merch.module.css";
import Navbar from "../../components/Navbar/Navbar";

// interface MerchItem {
//   id: number;
//   title: string;
//   price: number;
//   color: string;
//   imageUrl: string;
// }

const Merch: React.FC = () => {
  // const merchItems: MerchItem[] = [
  //   {
  //     id: 1,
  //     title: "Yugaantar T-Shirt",
  //     price: 499,
  //     color: "1 Color",
  //     imageUrl: "/tshirt-black.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Yugaantar T-Shirt",
  //     price: 499,
  //     color: "1 Color",
  //     imageUrl: "/tshirt-black.png",
  //   },
  // ];

  return (
    <main className={styles.container}>
      <Navbar />
      <div></div>
    </main>
  );
};

export default Merch;
