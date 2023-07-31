'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TaskList.configure({
        HTMLAttributes: {
          class: "not-prose pl-2",
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: "flex items-start my-4",
        },
        nested: true,
      }),
    ],
    content: `
    <h2>
      Hi there,
    </h2>
    <ul data-type="taskList">
      <li data-type="taskItem" data-checked="true">A list item</li>
      <li data-type="taskItem" data-checked="false">And another one</li>
    </ul>
    <p>
      this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `,
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  })

  if (!editor) return null

  return (
    <div className='space-x-4'>
      <input
        type="color"
        onInput={(event: any) => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color}
      />
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
      >
        purple
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#F98181').run()}
        className={editor.isActive('textStyle', { color: '#F98181' }) ? 'is-active' : ''}
      >
        red
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
        className={editor.isActive('textStyle', { color: '#FBBC88' }) ? 'is-active' : ''}
      >
        orange
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#FAF594').run()}
        className={editor.isActive('textStyle', { color: '#FAF594' }) ? 'is-active' : ''}
      >
        yellow
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
        className={editor.isActive('textStyle', { color: '#70CFF8' }) ? 'is-active' : ''}
      >
        blue
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#94FADB').run()}
        className={editor.isActive('textStyle', { color: '#94FADB' }) ? 'is-active' : ''}
      >
        teal
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
        className={editor.isActive('textStyle', { color: '#B9F18D' }) ? 'is-active' : ''}
      >
        green
      </button>
      <button onClick={() => editor.chain().focus().unsetColor().run()}>unsetColor</button>

      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap