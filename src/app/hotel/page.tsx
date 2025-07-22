"use client";

import { Button } from "@/components/button";

export default function Hotel() {
  const handleClick = () => {
    alert("예약하기");
  };
  return (
    <div>
      Hotel
      <Button onClick={handleClick}>예약하기</Button>
    </div>
  );
}
