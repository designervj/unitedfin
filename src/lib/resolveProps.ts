export function resolveProps(props: any, locale: string) {
  const resolved: any = {};
  for (const key in props) {
    const field = props[key];
    if (field && typeof field === "object" && "type" in field && "value" in field) {
      if (field.type === "text" || field.type === "textarea") {
        if (typeof field.value === "object" && locale in field.value) {
          resolved[key] = field.value[locale];
        } else {
          // Fallback to English if locale not found
          resolved[key] = field.value["en"] || "";
        }
      } else if (field.type === "list") {
        if (Array.isArray(field.value)) {
          resolved[key] = field.value.map((item: any) => {
            if (typeof item === "object" && locale in item) {
              return item[locale];
            }
            return item["en"] || item;
          });
        } else {
          resolved[key] = field.value;
        }
      } else {
        resolved[key] = field.value;
      }
    } else {
      resolved[key] = field;
    }
  }
  return resolved;
}
