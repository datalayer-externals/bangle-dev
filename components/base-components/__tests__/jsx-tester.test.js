/**
 * @jest-environment jsdom
 */
/** @jsx psx */
import { psx, typeText } from '@bangle.dev/test-helpers';

import { defaultTestEditor } from './test-editor';

const testEditor = defaultTestEditor();

test.each([
  [
    'paragraph',
    <doc>
      <para>foo</para>
    </doc>,
    <doc>
      <para>foohello</para>
    </doc>,
  ],

  [
    'bullet list',
    <doc>
      <ul>
        <li>
          <para>foo</para>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para>foohello</para>
        </li>
      </ul>
    </doc>,
  ],

  [
    'ordered list',
    <doc>
      <ol>
        <li>
          <para>foo</para>
        </li>
      </ol>
    </doc>,
    <doc>
      <ol>
        <li>
          <para>foohello</para>
        </li>
      </ol>
    </doc>,
  ],

  [
    'todo list',
    <doc>
      <bulletList>
        <listItem todoChecked={false}>
          <para>foo</para>
        </listItem>
      </bulletList>
    </doc>,
    <doc>
      <bulletList>
        <listItem todoChecked={false}>
          <para>foohello</para>
        </listItem>
      </bulletList>
    </doc>,
  ],

  [
    'blockquote',
    <doc>
      <blockquote>
        <para>foo</para>
      </blockquote>
    </doc>,
    <doc>
      <blockquote>
        <para>foohello</para>
      </blockquote>
    </doc>,
  ],

  [
    'codeBlock',
    <doc>
      <codeBlock>foo</codeBlock>
    </doc>,
    <doc>
      <codeBlock>foohello</codeBlock>
    </doc>,
  ],

  [
    'heading',
    <doc>
      <heading level={1}>foo</heading>
    </doc>,
    <doc>
      <heading level={1}>foohello</heading>
    </doc>,
  ],

  [
    'hardBreak',
    <doc>
      <para>
        foo
        <br />
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <br />
        hello
      </para>
    </doc>,
  ],

  // marks
  [
    'link',
    <doc>
      <para>
        foo
        <link href="https://example.com">example.com</link>
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <link href="https://example.com">example.com</link>
        hello
      </para>
    </doc>,
  ],

  [
    'underline',
    <doc>
      <para>
        foo
        <underline>bar</underline>
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <underline>barhello</underline>
      </para>
    </doc>,
  ],
])('Case %# %s schema is created correctly', async (type, input, expected) => {
  const { view } = await testEditor(input);
  typeText(view, 'hello');
  expect(view.state.doc).toEqualDocument(expected);
});

test.each([
  [
    'paragraph end',
    <doc>
      <para>fo[]</para>
    </doc>,
    <doc>
      <para>fohello[]</para>
    </doc>,
  ],

  [
    'paragraph start',
    <doc>
      <para>[]fo</para>
    </doc>,
    <doc>
      <para>hello[]fo</para>
    </doc>,
  ],

  [
    'paragraph empty',
    <doc>
      <para>[]</para>
    </doc>,
    <doc>
      <para>hello[]</para>
    </doc>,
  ],

  [
    'paragraph middle',
    <doc>
      <para>fo[]o</para>
    </doc>,
    <doc>
      <para>fohello[]o</para>
    </doc>,
  ],

  [
    'multiple paragraph empty middle',
    <doc>
      <para>foo</para>
      <para>[]</para>
      <para>bar</para>
    </doc>,
    <doc>
      <para>foo</para>
      <para>hello[]</para>
      <para>bar</para>
    </doc>,
  ],

  [
    'bullet list start',
    <doc>
      <ul>
        <li>
          <para>[]foo</para>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para>hello[]foo</para>
        </li>
      </ul>
    </doc>,
  ],

  [
    'bullet list multiple para',
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <para>[]bar</para>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <para>hello[]bar</para>
        </li>
      </ul>
    </doc>,
  ],

  [
    'bullet list multiple para',
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <para>[]bar</para>
          <para>zoo</para>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <para>hello[]bar</para>
          <para>zoo</para>
        </li>
      </ul>
    </doc>,
  ],

  [
    'bullet list nested ',
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <ul>
            <li>
              <para>[]bar</para>
              <para>zoo</para>
            </li>
          </ul>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <ul>
            <li>
              <para>hello[]bar</para>
              <para>zoo</para>
            </li>
          </ul>
        </li>
      </ul>
    </doc>,
  ],

  [
    'bullet list nested end',
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <ul>
            <li>
              <para>bar</para>
              <para>zoo[]</para>
            </li>
          </ul>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para>foo</para>
          <ul>
            <li>
              <para>bar</para>
              <para>zoohello[]</para>
            </li>
          </ul>
        </li>
      </ul>
    </doc>,
  ],

  [
    'bullet list nested empty',
    <doc>
      <ul>
        <li>
          <para></para>
          <ul>
            <li>
              <para>[]</para>
            </li>
          </ul>
        </li>
      </ul>
    </doc>,
    <doc>
      <ul>
        <li>
          <para></para>
          <ul>
            <li>
              <para>hello[]</para>
            </li>
          </ul>
        </li>
      </ul>
    </doc>,
  ],

  [
    'blockquote',
    <doc>
      <blockquote>
        <para>f[]oo</para>
      </blockquote>
    </doc>,
    <doc>
      <blockquote>
        <para>fhello[]oo</para>
      </blockquote>
    </doc>,
  ],

  [
    'heading level 1',
    <doc>
      <heading level={1}>f[]oo</heading>
    </doc>,
    <doc>
      <heading level={1}>fhello[]oo</heading>
    </doc>,
  ],

  [
    'hardBreak 1',
    <doc>
      <para>
        foo
        <br />
        []
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <br />
        hello[]
      </para>
    </doc>,
  ],

  [
    'hardBreak 2',
    <doc>
      <para>
        foo
        <br />
        []
        <br />
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <br />
        hello[]
        <br />
      </para>
    </doc>,
  ],

  // marks
  [
    'link',
    <doc>
      <para>
        foo
        <link href="https://example.com">example[].com</link>
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <link href="https://example.com">examplehello[].com</link>
      </para>
    </doc>,
  ],

  [
    'underline 1',
    <doc>
      <para>
        foo
        <underline>bar[]</underline>
      </para>
    </doc>,
    <doc>
      <para>
        foo
        <underline>barhello[]</underline>
      </para>
    </doc>,
  ],

  [
    'underline 2',
    <doc>
      <para>
        foo
        <underline>[]bar</underline>
      </para>
    </doc>,
    <doc>
      <para>
        foohello
        <underline>[]bar</underline>
      </para>
    </doc>,
  ],
])('Empty Selection Case %# %s', async (type, input, expected) => {
  const { view } = await testEditor(input);
  typeText(view, 'hello');

  expect(view.state).toEqualDocAndSelection(expected);
});

test('Selection range paragraph', async () => {
  const { view, selection } = await testEditor(
    <doc>
      <para>[foo]</para>
    </doc>,
  );
  expect(selection).toMatchInlineSnapshot(`
    Object {
      "anchor": 1,
      "head": 4,
      "type": "text",
    }
  `);
  expect(view.state).toEqualDocAndSelection(
    <doc>
      <para>[foo]</para>
    </doc>,
  );
});

test('Selection range paragraph 2', async () => {
  const { view, selection } = await testEditor(
    <doc>
      <para>[fo]o bar</para>
    </doc>,
  );
  expect(selection).toMatchInlineSnapshot(`
    Object {
      "anchor": 1,
      "head": 3,
      "type": "text",
    }
  `);
  expect(view.state).toEqualDocAndSelection(
    <doc>
      <para>[fo]o bar</para>
    </doc>,
  );
});

test('Selection range spanning multiple paragraphs', async () => {
  const { selection } = await testEditor(
    <doc>
      <para>[foo bar</para>
      <para>fo]o bar</para>
    </doc>,
  );
  expect(selection).toMatchInlineSnapshot(`
    Object {
      "anchor": 1,
      "head": 12,
      "type": "text",
    }
  `);
});

test('Selection range spanning multiple paragraphs 2', async () => {
  const { selection } = await testEditor(
    <doc>
      <para>[foo bar</para>
      <para>hello</para>
      <para>]</para>
    </doc>,
  );
  expect(selection).toMatchInlineSnapshot(`
    Object {
      "anchor": 1,
      "head": 17,
      "type": "text",
    }
  `);
});
