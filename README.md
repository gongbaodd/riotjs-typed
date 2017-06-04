# riotjs-typed

> a simple wrapper of riotjs+riotcontrol，can be used in both browser and ssr

## Introduction

It is quiet sad to opensource this repository. I used riotjs for about a year. It's very useful and very small. But in my workgroup, it is not so welcomed.

More and more people ask me why not use vuejs or react. I know they don't know how to use them or use them as poorly as my English. But I think it is not a good idea to insist on using riotjs in my company.

I turned to preact. In an optimistic way, maybe some guys in my company would like to code my projects not just desert them.

Howerver, that's why I opensouce the code.

***There is not so many riotjs-typescript wrappers for both SSR and browsers.***

So, if you think it's helpful, just let me know.Well, I don't have too much free time, but I would like to fix some bugs if you find them.

## How to

### browser

> html

        <html>
        ...
        <body>
            <your-tag></your-tag>
        </body>
        ...
        </html>

> ts

        const actions = {
            mounted: "mounted"
        };
        
        import { tag, TagCore, Store } from "riot-typed";

        @tag({
            name: "your-tag",
            tmpl: `
            <span>Hello, {content}</span>
            `
        })
        class YourTag extends TagCore {
            onCreate( tag, opts ) {
                // http://riotjs.com/api/#manual-construction
                // it is like the callback
                // and tag refers to this

                tag.content = opts.content;

                tag.on("mount", () => {
                    opts.ctrl.trigger(actions.mounted);
                });
            }
        }

        import { Control } from "riot-typed";
        const $ctrl = new Control();

        import { Store } from "riot-typed";
        class MountStore extends Store {
            constructor() {
                this.on(actions.mounted, () => {
                    console.log("some tag has been mounted");
                })
            }
        }

        $ctrl.addStore(new MountStore());

        const yourTag = new YourTag($ctrl);

        // mount is just like http://riotjs.com/api/#-riotmountcustomtagselector-opts
        // you dont need to pass customTagSelector
        window.onload = () => yourTag.mount({ content: "world" });


+ ```TagCore``` & ```@tag``` is used like ```riot.tag()```;
+ ```Control``` is a wrapper for ```riotcontrol```, like Flux.
+ A control must be passed to a TagCore's constructor, ```new YourTag($ctrl)```
+ A ```Store``` is kind like redux's middleware.
+ ```Control.addStore```is like redux's applyMiddleware

### SSR

Using the code above.

> server.ts

        app.use('/', (req, res) => {
            const $ctrl = new Control();
            const yourTag = new YourTag($ctrl);
            res.end(`
            <html>
            <body>
            ${yourTag.render({ content: "world in server." })}
            </body>
            </html>`);
        });

## Good Luck
