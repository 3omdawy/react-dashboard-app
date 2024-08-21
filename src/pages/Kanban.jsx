import React from "react";
import Header from "../components/Header";

import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";

import { v4 as uuid } from "uuid";

function Kanban() {
  const board = {
    columns: [
      {
        id: uuid(),
        title: "ToDo",
        cards: [
          {
            id: uuid(),
            title: "Implement feedback collector",
            description: "Card content",
          },
          {
            id: uuid(),
            title: "Bump version for new API for billing",
            description: "Card content",
          },
          {
            id: uuid(),
            title: "Add NPS feedback to wallboard",
            description: "Card content",
          },
        ],
      },
      {
        id: uuid(),
        title: "In Progress",
        cards: [
          {
            id: uuid(),
            title:
              "Update T&C copy with v1.9 from the writers guild in all products that have cross country compliance",
            description: "Card content",
          },
          {
            id: uuid(),
            title: "Tech spike on new Stripe integration with PayPal",
            description: "Card content",
          },
          {
            id: uuid(),
            title:
              "Refactor Stripe verification key validator to a single call to avoid timing out on slow connections",
            description: "Card content",
          },
          {
            id: uuid(),
            title: 'Change phone number field to type "phone"',
            description: "Card content",
          },
        ],
      },
      {
        id: uuid(),
        title: "In Testing",
        cards: [
          {
            id: uuid(),
            title: "Multi-dest search UI web",
            description: "Card content",
          },
        ],
      },
      {
        id: uuid(),
        title: "Done",
        cards: [
          {
            id: uuid(),
            title: "Quick booking for accommodations - web",
            description: "Card content",
          },
          {
            id: uuid(),
            title: "Adapt web app no new payments provider",
            description: "Card content",
          },
          {
            id: uuid(),
            title: "Fluid booking on tables",
            description: "Card content",
          },
          {
            id: uuid(),
            title: "Shopping card purchasing error - quick fix required",
            description: "Card content",
          },
        ],
      },
    ],
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Kanban" category="Page" />
      <div className="card px-2 w-full">
        <UncontrolledBoard
          initialBoard={board}
          onCardRemove={({ board, card, column }) => {
            console.log({ board, card, column }); // do business logic when card is removed
          }}
        />
      </div>
    </div>
  );
}

export default Kanban;
