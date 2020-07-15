import { helper as buildHelper } from "@ember/component/helper";
import { htmlSafe } from "@ember/template";

export function nastaliq(parameters /* , hash */) {
  return htmlSafe(
    `<span style="font-family: 'IranNastaliq', 'Urdu Emad Nastaleeq', 'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Draft', 'Awami Nastaliq', 'Awami Nastaliq Beta3', 'Awami Nastaliq Beta2', 'Awami Nastaliq Beta1', 'Urdu Typesetting', 'Jameel Noori Nastaleeq', 'Hussaini Nastaleeq', 'AlQalam Taj Nastaleeq', 'Nafees Nastaleeq', 'Nafees Nastaleeq v1.01', 'Pak Nastaleeq', 'PDMS_Jauhar', 'Alvi Lahori Nastaleeq'">${parameters}</span>`
  );
}

export const helper = buildHelper(nastaliq);
