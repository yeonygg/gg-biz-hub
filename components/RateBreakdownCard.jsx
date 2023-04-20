import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  InputToggle,
} from "pier-design-system";
import SubHeading from "./SubHeading";
import { useState } from "react";
import ResultTable from "./ResultTable";
import LaunchTimeline from "./LaunchTimeline";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Table from "./Table";

const RateBreakdownCard = (props) => {
  const resultHead = "Launch Timeline";

  const printDocument = () => {
    const input = document.getElementById("capture");
    html2canvas(input, {
      width: 1200,
      height: 2400,
      windowWidth: 1200,
      windowHeight: 2400,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [2400, 1200],
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("export.pdf");
    });
  };

  const [toggle, setToggle] = useState(0);

  const handleToggle = (event, field) => {
    if (field === "isBlend") {
      if (event.target.checked === true) {
        setToggle(true);
      } else {
        setToggle(false);
      }
    }
  };

  return (
    <Card className="result-card">
      <Section className="section-style">
        {" "}
        <LaunchTimeline campaign={props.campaign} />
        <HR />
        <div className="buttons-section">
          <Button
            size="sm"
            title="Button"
            icon="fas fa-external-link-alt"
            disabled={false}
            dark={false}
            pill={false}
            onClick={printDocument}
          >
            Share
          </Button>
        </div>
      </Section>
    </Card>
  );
};

export default RateBreakdownCard;
