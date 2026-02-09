import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText;
    if (error.status === 404) {
      errorMessage = "Page Not Found";
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unexpected error occurred";
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.errorCode}>
          {errorStatus || "Error"}
        </div>
        <h1 className={styles.errorTitle}>{errorMessage}</h1>
        <p className={styles.errorDescription}>
          {errorStatus === 404
            ? "Sorry, the page you're looking for doesn't exist."
            : "Something went wrong. Please try again."}
        </p>
        <button
          className={styles.homeButton}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
