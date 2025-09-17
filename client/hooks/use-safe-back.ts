import { useNavigate } from "react-router-dom";

export function useSafeBack() {
  const navigate = useNavigate();
  return () => {
    // Go back if possible, otherwise go home
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };
}
