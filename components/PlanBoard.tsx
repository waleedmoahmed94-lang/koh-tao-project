import type { TodaysPlan } from "@/lib/dailyPlans";

type Props = { plans: TodaysPlan[] };

const spotsTagClass = (status: string) => {
  const lower = status.toLowerCase();
  const low = lower.includes("left") && /\b[1-3]\b/.test(lower);
  return low
    ? "bg-warn-soft text-warn"
    : "bg-accent-soft text-accent-deep";
};

export const PlanBoard = ({ plans }: Props) => {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <section className="border-t border-line px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-1 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-medium">Tomorrow&apos;s dive plan</h2>
          <span className="font-mono text-xs text-ink-faint">{today}</span>
        </div>
        <p className="mb-5 max-w-2xl text-sm text-ink-soft">
          Which site, which boat time, how many spots — sent in daily by each school once they&apos;re
          on board.
        </p>

        {plans.length === 0 ? (
          <div className="border border-dashed border-line bg-surface p-8 text-center">
            <p className="text-sm text-ink-soft">
              No schools are sending daily plans yet — this fills in once schools join and start
              confirming tomorrow&apos;s site each day.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-line bg-surface">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr>
                  {["School", "Site", "Boat", "Spots"].map((h) => (
                    <th
                      key={h}
                      className="border-b border-line px-4 py-3 text-left font-mono text-[0.66rem] font-medium uppercase tracking-wide text-ink-faint"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.id} className="border-b border-line-soft last:border-b-0">
                    <td className="px-4 py-3 font-semibold">{plan.schoolName}</td>
                    <td className="px-4 py-3">{plan.site}</td>
                    <td className="px-4 py-3 font-mono tabular-nums">{plan.boatTime}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-0.5 font-mono text-xs ${spotsTagClass(plan.spotsStatus)}`}>
                        {plan.spotsStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
