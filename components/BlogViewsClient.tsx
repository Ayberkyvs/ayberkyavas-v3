"use client";

import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";

export default function BlogViewsClient({
  _id,
  initialViews,
}: {
  _id: string;
  initialViews: number;
}) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    const viewedPosts = JSON.parse(localStorage.getItem("viewedPosts") || "[]");
    if (!viewedPosts.includes(_id)) {
      fetch("/api/views", {
        method: "POST",
        body: JSON.stringify({ _id, currentViews: views }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setViews(data.views);
          }
        })
        .catch(console.error);
      localStorage.setItem(
        "viewedPosts",
        JSON.stringify([...viewedPosts, _id]),
      );
    }
  }, [_id]);

  return (
    <Badge variant="outline" className="text-sm text-foreground">
      {views} views
    </Badge>
  );
}
