import { useEffect } from "react";

function title(value) {
  let titleValue = value;

  useEffect(() => {
    document.title = `FristHomes - ${titleValue}`;
  }, [titleValue]);
}

export default title;
