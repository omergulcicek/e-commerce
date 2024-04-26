import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export async function Filters() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <nav>
          <ul className="flex w-80 flex-col gap-2">
            <li className="flex items-center">
              <Label className="inline-flex cursor-pointer items-center space-x-2">
                <Checkbox value="apple" />
                <span>Apple</span>
              </Label>
            </li>
            <li className="flex items-center">
              <Label className="inline-flex cursor-pointer items-center space-x-2">
                <Checkbox value="samsung" />
                <span>Samsung</span>
              </Label>
            </li>
            <li className="flex items-center">
              <Label className="inline-flex cursor-pointer items-center space-x-2">
                <Checkbox value="xiaomi" />
                <span>Xiaomi</span>
              </Label>
            </li>
          </ul>
        </nav>

        <Button variant="outline">Apply</Button>
      </div>
    </>
  );
}
