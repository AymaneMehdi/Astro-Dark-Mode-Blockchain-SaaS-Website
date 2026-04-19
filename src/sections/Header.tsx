import { CutCornerButton } from "../components/CutCornerButton";

export const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              BlockNova
            </h3>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <CutCornerButton className="hidden md:inline-flex text-xs md:text-sm">
                Get Started
              </CutCornerButton>
              <div className="md:hidden size-8 relative cursor-pointer">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
