import EdgeText from '$lib/Edges/EdgeText.svelte';
import { render, screen, cleanup } from '@testing-library/svelte';

beforeEach(() => {
  const mockEdgeTextProps = {
    sourceX: 50,
    sourceY: 100,
    targetX: 150,
    targetY: 200,
    label: 'edge text test'
  };
  render(EdgeText, { props: { edgeTextProps: mockEdgeTextProps } });
});

describe('edgeText label', () => {
  test('should render the label text', () => {
    const label = screen.getByText('edge text test');

    expect(label).toBeInTheDocument();
  });

  test('should render the label at the correct coordinates', () => {
    const label = screen.getByText('edge text test');

    expect(label).toHaveAttribute('x', '100');
    expect(label).toHaveAttribute('y', '150');
  });

  test('should render the edge text background', () => {
    const label = screen.getByTestId('edge-text-bg');

    expect(label).toHaveAttribute('x', '58');
    expect(label).toHaveAttribute('y', '143');
    expect(label).toHaveAttribute('width', '84');
    expect(label).toHaveAttribute('height', '16');
  });
});
