import { Status } from "@/constant/levels";
import { Module } from "@/types/learning";

// export const getProgress = (level: Level, modules: Module) => {
//     const total = modules.filter((m) => m.level === level).length;
//     const completed = modules.filter(
//       (m) => m.level === level && m.status === Status.COMPLETED
//     ).length;
//     return total === 0 ? 0 : Math.round((completed / total) * 100);
//   };

export  const GetModuleProgress = (module: Module) => {
    const total = module.content?.length ?? 0;
    const completed =
      module.content?.filter((c) => c.status === Status.COMPLETED).length ?? 0;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };