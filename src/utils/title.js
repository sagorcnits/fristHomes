import { useEffect } from "react";

function title(value) {
  let titleValue = value;

  useEffect(() => {
    document.title = `FristHome - ${titleValue}`;
  }, [titleValue]);
}

export default title;
