import { renderHook, act } from "@testing-library/react";
import { useFeatureSwitcher } from "../useFeatureSwitcher";

describe(useFeatureSwitcher.name, () => {
  test("should be off by default", () => {
    const { result } = renderHook(() => useFeatureSwitcher());
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });
  test("should assign passed visibility value as initial", () => {
    const { result } = renderHook(() => useFeatureSwitcher(true));
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });
  test("should assign passed visibility function as initial", () => {
    const { result } = renderHook(() => useFeatureSwitcher(() => true));
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
    act(() => {
      result.current.off();
    });
    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);

    act(() => {
      result.current.reset();
    });
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  test("should turn on feature", () => {
    const { result } = renderHook(() => useFeatureSwitcher());
    act(() => {
      result.current.on();
    });
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
  });

  test("should toggle feature", () => {
    const { result } = renderHook(() => useFeatureSwitcher());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOn).toBe(true);
    expect(result.current.isOff).toBe(false);
    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOn).toBe(false);
    expect(result.current.isOff).toBe(true);
  });
  test("should reset to the initial visibility", () => {
    const { result } = renderHook(() => useFeatureSwitcher(true));
    act(() => {
      result.current.off();
    });
    expect(result.current.isOn).toBe(false);
    act(() => {
      result.current.reset();
    });
    expect(result.current.isOn).toBe(true);
  });
});
