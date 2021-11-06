import Dialog from "./Dialog.vue";
import { createApp, h, VNode } from "vue";

interface IDialogOptions {
    title?: VNode,
    content?: String,
    ok?: () => void,
    cancel?: () => void
}
export const openDialog = (options: IDialogOptions) => {
    const { title, content, ok, cancel } = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    };
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    "onUpdate:visible": (newVisible: Boolean) => {
                        if(newVisible === false) {
                            close()
                        }
                    },
                    ok, cancel
                },
                {
                    title: () => title,
                    content: () => content,
                }
            )
        }
    });
    app.mount(div);
}