import { isBrowser } from "@app/utils";

export const submitNetlifyForm = async (e: any) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const body = new URLSearchParams(formData as any).toString();
  console.log({ formData, body });
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData as any).toString(),
  });
  return { response, form };
};

export const parseDripURL = () => {
  if (!isBrowser()) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  return {
    drip_email: params.get("drip_email"),
    drip_subscriber_id: params.get("drip_subscriber_id"),
  };
};
