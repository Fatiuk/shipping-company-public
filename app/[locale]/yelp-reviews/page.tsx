"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { useGlobalContext } from "@/context/context";

const VideoReviews: FC = (): ReactElement => {
  const { lang } = useGlobalContext();

  useEffect(() => {}, []);

  return <div>Yelp Reviews</div>;
};

export default VideoReviews;
