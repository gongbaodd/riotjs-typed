import { tag, TagCore, Control } from "../../../../ts/index";

@tag({
    name: "test",
    tmpl: `<span>{title}</span>`,
})
class Test extends TagCore {
    public onCreate(tag, opts) {
        tag.title = opts.title;
    }
}

const ctrl = new Control();
const test = new Test(ctrl);
test.mount({ title: "test" });
