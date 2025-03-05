"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import HardBreak from "@tiptap/extension-hard-break"; // ✅ Import HardBreak
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListOl,
  FaListUl,
  FaHeading
} from 'react-icons/fa';
import { useState } from "react";

const TipTapEditor = ({ content, setContent }) => {
  const [headingLevel, setHeadingLevel] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit, // ✅ Keep paragraph enabled
      Underline,
      HardBreak.extend({ // ✅ Override Enter key behavior
        addKeyboardShortcuts() {
          return {
            Enter: () => this.editor.commands.setHardBreak(), // Insert <br/>
          };
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[250px]'
      }
    },
  });

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  const handleHeadingChange = (e) => {
    const value = e.target.value;

    if (value === "p") {
      editor.chain().focus().setParagraph().run(); 
      setHeadingLevel(""); 
    } else {
      editor.chain().focus().toggleHeading({ level: Number(value) }).run();
      setHeadingLevel(value);
    }
  };

  return (
    <div className="border p-4 rounded-lg">
      {/* Toolbar */}
      <div className="flex gap-2 mb-2 pb-2">
        <div className="relative">
          <button className="p-2">
            <FaHeading/>
          </button>
          <select
            value={headingLevel}
            onChange={handleHeadingChange}
            className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          >
            <option value="p">Paragraph</option>
            {[1, 2].map((level) => (
              <option key={level} value={level}>H{level}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 ${editor.isActive('bold') ? 'bg-gray-300' : ''}`}
        >
          <FaBold/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 ${editor.isActive('italic') ? 'bg-gray-300' : ''}`}
        >
          <FaItalic/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 ${editor.isActive('underline') ? 'bg-gray-300' : ''}`}
        >
          <FaUnderline/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 ${editor.isActive('bulletList') ? 'bg-gray-300' : ''}`}
        >
          <FaListUl/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 ${editor.isActive('orderedList') ? 'bg-gray-300' : ''}`}
        >
          <FaListOl/>
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="rounded focus:outline-none p-2 text-xl" />
    </div>
  );
};

export default TipTapEditor;
