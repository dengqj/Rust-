
import type { Level } from '../types';

export const curriculumData: Level[] = [
  {
    id: 'level-1-wrapper',
    level: 1,
    title: {
      en: "Level 1: Goal",
      zh: "Level 1：目标——编译时正确性"
    },
    description: {
      en: "The 'Why' of Rust: A Philosophy of Correctness",
      zh: "这是 Rust 的‘为什么’。它是一种贯穿始终的哲学理念。"
    },
    topics: [
      {
        id: 'level-1',
        title: {
          en: "Compile-Time Correctness",
          zh: "编译时正确性"
        },
        coreConcept: {
          en: "This is the 'why' of Rust. It's a philosophy that permeates the entire language. The goal is to build programs where logical inconsistencies and invalid operations are caught before the program even runs.",
          zh: "核心概念：构建这样的程序——即逻辑上的不一致和无效操作，能在程序运行前就被发现。"
        },
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "We don't want to check if a post can be edited at runtime with `if post.is_published()`. We want the compiler to throw an error and refuse to compile if we even *try* to write code that edits a published post.",
              zh: "我们不希望在运行时通过 `if post.is_published()` 来检查是否允许编辑。我们希望的是，一旦我们尝试编写编辑已发布帖子的代码，编译器就直接报错，阻止编译通过。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "We want to prove a logical proposition. The goal is to make it impossible for the compiler to prove two things simultaneously: that `is_editable(Post)` is true AND `is_published(Post)` is true.",
              zh: "我们想要证明一个逻辑命题。目标是让编译器无法同时证明两个命题：`is_editable(Post)` 为真，并且 `is_published(Post)` 也为真。"
            }
          }
        ]
      }
    ]
  },
  {
    id: 'level-2-wrapper',
    level: 2,
    title: {
      en: "Level 2: Mechanism",
      zh: "Level 2：机制——类型系统"
    },
    description: {
      en: "The 'How' of Rust: The Type System as a Logic Engine",
      zh: "这是 Rust 实现‘如何’做到的部分。类型系统是 Rust 用来达成编译时正确性的主要工具。"
    },
    topics: [
      {
        id: 'level-2',
        title: {
          en: "The Type System",
          zh: "类型系统"
        },
        coreConcept: {
          en: "This is the 'how' Rust achieves its goal. The type system is the primary tool for ensuring compile-time correctness. All subsequent concepts are components within this system. It's not just for defining data shapes (like `int`, `string`); it's a programmable logic engine that reasons about a data's capabilities and state.",
          zh: "核心概念：类型系统不仅仅是定义数据的形状（比如 `int`、`string`）。它是一个可编程的逻辑引擎，能够对数据的能力和状态进行推理。"
        },
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "Instead of using a field like `state: \"draft\"` to represent state, we encode the document's state directly into its type. We will have a `DraftPost` type and a `PublishedPost` type. An object *is* its state.",
              zh: "我们不会使用一个像 `state: \"draft\"` 这样的字段来表示状态。相反，我们会将文档的状态直接编码到它的类型中。我们会拥有 `DraftPost` 类型和 `PublishedPost` 类型。一个对象，它‘就是’它的状态。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "The type system is our 'Prolog logic engine.' It takes facts and rules (our code) and determines if a goal (like calling a method) is provable.",
              zh: "类型系统就像是我们的‘Prolog 逻辑引擎’。它接收事实和规则（也就是我们的代码），然后判断某个目标（比如调用一个方法）是否是可被证明的。"
            }
          }
        ]
      }
    ]
  },
  {
    id: 'level-3-wrapper',
    level: 3,
    title: {
      en: "Level 3: Components",
      zh: "Level 3：组件——逻辑与状态"
    },
    description: {
      en: "The Core Building Blocks of Logic and State",
      zh: "这些是我们将在类型系统中用来定义逻辑的核心组件。"
    },
    topics: [
      {
        id: 'struct',
        title: {
          en: "A. `struct` - Representing a State",
          zh: "A. `struct`——代表一种状态"
        },
        coreConcept: {
          en: "In our logic system, a `struct` is a 'term' or a concrete 'object'. It *is* a state. A `struct` defines the data associated with a specific, concrete state.",
          zh: "在我们的逻辑系统中，`struct`（结构体）可以看作是一个‘项’（term）或一个具体的‘对象’。它‘就是’一种状态。`struct` 定义了与某个特定、具体状态相关联的数据。"
        },
        exampleCode: 
`// A struct representing the draft state, containing content.
pub struct DraftPost {
    content: String,
}

// A struct representing the published state, where content is immutable.
pub struct PublishedPost {
    content: String,
}`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "We now have two distinct types, `DraftPost` and `PublishedPost`, representing the two possible states of a document. An object *is* its state.",
              zh: "现在我们有了两个不同的类型：`DraftPost` 和 `PublishedPost`，它们分别代表了文档的两种可能状态。一个对象，它‘就是’它的状态。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "`DraftPost` and `PublishedPost` are the 'terms' our logic engine will reason about. Think of them as `draft_post(...)` and `published_post(...)` in logic.",
              zh: "`DraftPost` 和 `PublishedPost` 是我们的逻辑引擎将要推理的‘项’。你可以将它们想象成逻辑中的 `draft_post(...)` 和 `published_post(...)`。"
            }
          }
        ]
      },
      {
        id: 'trait',
        title: {
          en: "B. `trait` - Defining a State's Capability",
          zh: "B. `trait`——定义状态的能力"
        },
        coreConcept: {
          en: "In our logic system, a `trait` is a 'predicate'. It describes a property or capability. A `trait` defines a behavior or property a state *might* have, without providing a concrete implementation. It's like asking a question: 'Does this type have this capability?'",
          zh: "在我们的逻辑系统中，`trait`（特征）可以看作一个‘断言’（predicate）。它描述了一种属性或能力。`trait` 定义了一种状态可能拥有的行为或属性，但不提供具体的实现。它就像是在问一个问题：“这个类型拥有这项能力吗？”"
        },
        exampleCode: 
`// This trait defines the capability of being 'Editable'.
pub trait Editable {
    fn edit(&mut self, new_content: &str);
}`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "We've defined what it *means* to be 'Editable'. Now, we can selectively grant this capability to our state `struct`s.",
              zh: "我们已经定义了‘可编辑’的含义。现在，我们可以有选择地将这项能力授予我们的状态 `struct`。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "The `Editable` trait is the logical predicate `is_editable(T)`. It asks: 'Can it be proven that `T` is editable?'",
              zh: "`Editable` 这个 Trait 就是逻辑断言 `is_editable(T)`。它在询问：“能否证明 `T` 是可编辑的？”"
            }
          }
        ]
      },
      {
        id: 'impl',
        title: {
          en: "C. `impl` - Asserting a Fact or Rule",
          zh: "C. `impl`——断言事实或规则"
        },
        coreConcept: {
          en: "An `impl` (implementation) block is an 'assertion'. It tells the logic engine that a fact is true. The `impl` block provides the concrete code for a `trait` on a specific `struct`. It's the crucial step of granting a capability to a state.",
          zh: "一个 `impl`（实现）块就是一个‘断言’。它告诉逻辑引擎某个事实是真的。`impl`（实现）块为特定 `struct` 提供了 `trait` 的具体代码。它是将一种能力授予某个状态的关键环节。"
        },
        exampleCode: 
`// We assert a fact: DraftPost is Editable.
impl Editable for DraftPost {
    fn edit(&mut self, new_content: &str) {
        self.content = new_content.to_string();
        println!("Post has been edited.");
    }
}

// Crucially, we provide NO \`impl Editable\` for PublishedPost.`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "We have enforced that only a `DraftPost` can be edited. By omitting the `impl` for `PublishedPost`, we make it impossible for that state to have this capability.",
              zh: "我们强制规定了只有 `DraftPost` 才能被编辑。通过省略 `PublishedPost` 的 `impl`，我们使得该状态不可能拥有这项能力。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "The `impl` block is a logical assertion: `is_editable(DraftPost)` is now a known fact in our system. Because there is no corresponding `impl` for `PublishedPost`, `is_editable(PublishedPost)` can never be proven true.",
              zh: "`impl` 块是一个逻辑断言：`is_editable(DraftPost)` 现在是我们系统中的一个已知事实。而对于 `PublishedPost`，由于缺少对应的 `impl`，这意味着 `is_editable(PublishedPost)` 永远无法被证明为真。"
            }
          }
        ]
      },
      {
        id: 'ownership',
        title: {
          en: "D. Ownership & Moves - Driving State Transitions",
          zh: "D. 所有权与移动——驱动状态迁移"
        },
        coreConcept: {
          en: "'Moves' are the transformation rules that drive changes in state (and thus, type). Rust's ownership system allows a function to 'consume' a value, taking ownership and invalidating the original variable. This is the engine of the state type pattern, as it allows us to destroy an old state while creating a new one.",
          zh: "‘移动’（Moves）是驱动状态（进而改变数据类型）的转换规则。Rust 的所有权系统允许一个函数‘消耗’（consume）一个值，获取其所有权并使原始变量失效。这就是状态类型模式的引擎，因为它允许我们在销毁旧状态的同时创建新状态。"
        },
        exampleCode:
`impl DraftPost {
    // This method consumes the DraftPost...
    pub fn publish(self) -> PublishedPost {
        // ...and returns a new PublishedPost.
        PublishedPost { content: self.content }
    }
}`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "The `publish` method is our state transition. It takes a `DraftPost` and turns it into a `PublishedPost`. The old `DraftPost` is destroyed in the process.",
              zh: "`publish` 方法就是我们的状态迁移。它接收一个 `DraftPost`，然后将其变成一个 `PublishedPost`。在这个过程中，旧的 `DraftPost` 被销毁。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "This is a transformation rule: `publish(DraftPost) => PublishedPost`. Applying this rule changes the fundamental 'term' the logic engine is reasoning about.",
              zh: "这是一个转换规则：`publish(DraftPost) => PublishedPost`。应用这个规则会改变逻辑引擎所推理的基本‘项’。"
            }
          }
        ]
      }
    ]
  },
  {
    id: 'level-4-wrapper',
    level: 4,
    title: {
      en: "Level 4: Syntax",
      zh: "Level 4：语法——执行逻辑"
    },
    description: {
      en: "The Low-Level Constructs that Execute the Logic",
      zh: "这些是驱动整个系统运行的更底层的语言构造。"
    },
    topics: [
      {
        id: 'functions',
        title: {
          en: "A. Functions & Methods - Posing a Query",
          zh: "A. 函数与方法——提出查询"
        },
        coreConcept: {
          en: "Calling a method is like posing a goal for the compiler to prove. Functions and methods are the actions we perform on our states.",
          zh: "调用一个方法，就像是向编译器提出一个需要证明的目标。函数和方法是我们对状态进行操作的动作。"
        },
        exampleCode:
`fn main() {
    let mut post = DraftPost { content: "Hello".to_string() };

    // The query: Is \`post\` editable?
    // Compiler: Yes, I can prove \`is_editable(DraftPost)\`. This code compiles.
    post.edit("Hello, world!"); // Outputs: Post has been edited.
}`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "We can successfully call `.edit()` because our `post` variable is of type `DraftPost`.",
              zh: "我们可以成功调用 `.edit()`，因为我们的 `post` 变量是 `DraftPost` 类型。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "The line `post.edit(...)` is a query: 'Can you solve for `is_editable(type_of(post))`?' The compiler finds the corresponding `impl` fact and succeeds.",
              zh: "`post.edit(...)` 这行代码就是一个查询：“你能解决 `is_editable(type_of(post))` 吗？” 编译器找到了对应的 `impl` 事实，并成功了。"
            }
          }
        ]
      },
      {
        id: 'variables',
        title: {
          en: "B. Variables - Holding the Current State",
          zh: "B. 变量——持有当前状态"
        },
        coreConcept: {
          en: "A variable is bound to a 'term' of a specific type (and therefore, a specific state). The variable holds a value, and its type dictates its current state and capabilities.",
          zh: "变量绑定到一个特定类型的‘项’（也因此，绑定到一个特定状态）。变量持有值。它的类型决定了它当前的状态和能力。"
        },
        exampleCode:
`fn main() {
    let mut post = DraftPost { content: "Hello".to_string() };
    post.edit("Hello, world!");

    // State transition occurs here. \`post\` is moved.
    let published = post.publish();

    // Query: Is \`post\` editable?
    // Compiler: Error! \`post\` no longer exists. Its value was moved.
    // post.edit("This will not compile!");

    // Query: Is \`published\` editable?
    // Compiler: Error! I cannot prove \`is_editable(PublishedPost)\`.
    // published.edit("This also will not compile!");
}`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "The compiler errors perfectly demonstrate the success of the pattern. After calling `.publish()`, it is *impossible* to call `.edit()` again for two reasons: 1) the original `post` variable is gone, and 2) the new `published` variable has a type (`PublishedPost`) that lacks the `Editable` capability.",
              zh: "编译器产生的错误完美地展示了这个模式的成功之处。在调用 `.publish()` 之后，你*不可能*再调用 `.edit()`，原因有二：1) 原始变量 `post` 已经不存在了；2) 新变量 `published` 的类型（`PublishedPost`）不具备 `Editable` 能力。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "After the move, the 'term' `post` is no longer valid. The new `term` `published` exists, but when the compiler queries `is_editable(PublishedPost)`, it finds no facts or rules to prove it, so the query fails (i.e., a compile error).",
              zh: "移动操作后，`post` 这个‘项’不再有效。新的‘项’`published` 存在，但当编译器查询 `is_editable(PublishedPost)` 时，它找不到任何事实或规则来证明这一点，因此查询失败（即编译错误）。"
            }
          }
        ]
      },
      {
        id: 'control-flow',
        title: {
          en: "C. Control Flow - Conditional State Transitions",
          zh: "C. 控制流——条件状态迁移"
        },
        coreConcept: {
          en: "Control flow structures (`if`, `match`) decide whether to pose the query for a state transition. These blocks allow us to make runtime decisions about whether to *attempt* a state transition.",
          zh: "控制流结构（如 `if`、`match`）决定了是否应该进行状态迁移的查询。`if`、`match` 等控制流块允许我们在运行时做出决定，判断是否要尝试进行状态迁移。"
        },
        exampleCode:
`fn publish_if_approved(post: DraftPost, is_approved: bool) -> Option<PublishedPost> {
    if is_approved {
        // State transition only happens in this branch.
        Some(post.publish())
    } else {
        // The post is not consumed and remains a draft.
        println!("Post was not approved.");
        None
    }
}`,
        explanations: [
          {
            title: {
              en: "State Type Pattern Embodiment",
              zh: "状态类型模式的体现"
            },
            description: {
              en: "We can now conditionally transition our `DraftPost`. The compiler still validates the logic within each branch, ensuring that no matter which path is taken, the state rules are not violated.",
              zh: "现在我们可以有条件地迁移我们的 `DraftPost` 了。编译器依然会在每个分支内验证逻辑，确保无论代码执行哪个路径，状态规则都不会被违反。"
            }
          },
          {
            title: {
              en: "'Trait as Logic' Embodiment",
              zh: "‘Trait 即逻辑’的体现"
            },
            description: {
              en: "This adds a condition to our transformation rule. Only when the condition `is_approved == true` is met is the query to `publish` the `post` made. The logic remains sound across all possible code paths.",
              zh: "这为我们的转换规则增加了一个条件。只有当 `is_approved == true` 这个条件满足时，才会发出 `publish` `post` 的查询。这样，在所有可能的代码路径上，逻辑都是严谨的。"
            }
          }
        ]
      }
    ]
  }
];
