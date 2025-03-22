import styles from "./Loader.module.css"
export const Loader: React.FC = () => {
    // Create an array of 60 items to render circles
    const circles = Array.from({ length: 60 }, (_, i) => i + 1);
  
    return (
      <div className="loader relative h-screen flex justify-center items-center">
        {circles.map((i) => (
          <div key={i} className={styles.circle} />
        ))}
      </div>
    );
  };