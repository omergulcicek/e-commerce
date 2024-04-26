export async function Filters() {
  return (
    <>
      <nav className="flex w-80 flex-col gap-2">
        <ul>
          <li>
            <label>
              <input type="checkbox" name="brand" />
              <span>Apple</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="brand" />
              <span>Samsung</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="brand" />
              <span>Google</span>
            </label>
          </li>
        </ul>
      </nav>
    </>
  );
}
