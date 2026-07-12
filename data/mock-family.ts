import type { Family } from "@/domain/types";

export const mockFamily: Family = {
  id: "family-1",
  people: [{ id: "person-1", name: "Lena" }],
  dog: { id: "dog-1", name: "Bellman" },
};
